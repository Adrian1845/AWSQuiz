import { useEffect, useId, useMemo, useRef, useState } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

type Choice = { id: string; text: string };
type Question = {
  id: string;
  title: string;
  domain: string;
  services: string[];
  difficulty: "easy" | "medium" | "hard";
  type: "single" | "multiple";
  choices: Choice[];
  correct: string[];
  tags: string[];
  explanation: string;
};
type Note = { id: string; title: string; domain: string; services: string[]; tags: string[]; keywords: string[]; body: string };
type FeedbackMode = "instant" | "end";

const storageKey = "aws-saa-quiz-progress-v1";
const bookmarksStorageKey = "aws-saa-quiz-bookmarks-v1";
const themeStorageKey = "aws-saa-quiz-theme-v1";
const normalize = (body: string) => body.replace(/^#{1,6}\s+/gm, "").replace(/\*\*(.*?)\*\*/g, "$1").trim();
const sameAnswers = (left: string[], right: string[]) => left.length === right.length && left.every((id) => right.includes(id));
const searchTerms = (value: string) => value.toLowerCase().split(/[\s,]+/).filter(Boolean);
const matchesAnyTerm = (value: string, terms: string[]) => !terms.length || terms.some((term) => value.includes(term));

function MermaidDiagram({ chart }: { chart: string }) {
  const element = useRef<HTMLDivElement>(null);
  const diagramId = useId().replace(/:/g, "");
  const [error, setError] = useState(false);

  useEffect(() => {
    let active = true;
    void import("mermaid").then(({ default: mermaid }) => {
      mermaid.initialize({ startOnLoad: false, securityLevel: "strict", theme: "neutral" });
      return mermaid.render(`diagram-${diagramId}`, chart);
    }).then(({ svg }) => {
      if (active && element.current) element.current.innerHTML = svg;
    }).catch(() => { if (active) setError(true); });
    return () => { active = false; };
  }, [chart, diagramId]);

  return error ? <pre className="mermaid-error"><code>{chart}</code></pre> : <div className="mermaid-diagram" ref={element} aria-label="Diagram" />;
}

export default function QuizWorkspace({ questions, notes }: { questions: Question[]; notes: Note[] }) {
  const [index, setIndex] = useState(0);
  const [questionIds, setQuestionIds] = useState<string[]>(() => questions.map((question) => question.id));
  const [answers, setAnswers] = useState<Record<string, string[]>>({});
  const [submitted, setSubmitted] = useState<Record<string, boolean>>({});
  const [mode, setMode] = useState<FeedbackMode>("instant");
  const [finished, setFinished] = useState(false);
  const [questionSearch, setQuestionSearch] = useState("");
  const [questionLimit, setQuestionLimit] = useState(Math.min(20, questions.length));
  const [search, setSearch] = useState("");
  const [selectedNote, setSelectedNote] = useState<Note | null>(null);
  const [bookmarkedIds, setBookmarkedIds] = useState<string[]>([]);
  const [darkMode, setDarkMode] = useState(false);
  const [hydrated, setHydrated] = useState(false);

  const activeQuestions = useMemo(() => {
    const byId = new Map(questions.map((question) => [question.id, question]));
    return questionIds.map((id) => byId.get(id)).filter((question): question is Question => Boolean(question));
  }, [questionIds, questions]);
  const questionTerms = searchTerms(questionSearch);
  const matchingQuestions = useMemo(() => questions.filter((item) => matchesAnyTerm([item.title, item.domain, item.services.join(" "), item.tags.join(" ")].join(" ").toLowerCase(), questionTerms)), [questionTerms, questions]);

  useEffect(() => {
    const saved = localStorage.getItem(storageKey);
    if (saved) {
      try {
        const state = JSON.parse(saved) as { index?: number; answers?: Record<string, string[]>; mode?: FeedbackMode; questionIds?: string[] };
        const validIds = new Set(questions.map((question) => question.id));
        const savedIds = state.questionIds?.filter((id) => validIds.has(id));
        if (savedIds?.length) setQuestionIds(savedIds);
        if (typeof state.index === "number" && state.index < (savedIds?.length ?? questions.length)) setIndex(state.index);
        if (state.answers) setAnswers(state.answers);
        if (state.mode) setMode(state.mode);
      } catch { localStorage.removeItem(storageKey); }
    }
    const savedBookmarks = localStorage.getItem(bookmarksStorageKey);
    if (savedBookmarks) {
      try {
        const validIds = new Set(questions.map((question) => question.id));
        const bookmarks = JSON.parse(savedBookmarks);
        if (Array.isArray(bookmarks)) setBookmarkedIds([...new Set(bookmarks.filter((id): id is string => typeof id === "string" && validIds.has(id)))]);
      } catch { localStorage.removeItem(bookmarksStorageKey); }
    }
    setDarkMode(localStorage.getItem(themeStorageKey) === "dark");
    setHydrated(true);
  }, [questions]);

  useEffect(() => {
    if (hydrated) localStorage.setItem(storageKey, JSON.stringify({ index, answers, mode, questionIds }));
  }, [answers, hydrated, index, mode, questionIds]);

  useEffect(() => {
    if (hydrated) localStorage.setItem(bookmarksStorageKey, JSON.stringify(bookmarkedIds));
  }, [bookmarkedIds, hydrated]);

  useEffect(() => {
    document.documentElement.dataset.theme = darkMode ? "dark" : "light";
    if (hydrated) localStorage.setItem(themeStorageKey, darkMode ? "dark" : "light");
  }, [darkMode, hydrated]);

  if (!activeQuestions.length) return <section className="empty"><h1>No questions in this set</h1><p>Clear the question filter or choose a new randomized set.</p></section>;

  const question = activeQuestions[index];
  const selected = answers[question.id] ?? [];
  const answered = Object.keys(answers).filter((id) => answers[id]?.length).length;
  const correctCount = activeQuestions.filter((item) => sameAnswers(answers[item.id] ?? [], item.correct)).length;
  const gradedQuestionIds = mode === "instant" ? new Set(Object.keys(submitted).filter((id) => submitted[id])) : finished ? new Set(activeQuestions.map((item) => item.id)) : new Set<string>();
  const gradedCount = activeQuestions.filter((item) => gradedQuestionIds.has(item.id)).length;
  const liveCorrectCount = activeQuestions.filter((item) => gradedQuestionIds.has(item.id) && sameAnswers(answers[item.id] ?? [], item.correct)).length;
  const incorrectCount = gradedCount - liveCorrectCount;
  const reveal = mode === "instant" ? Boolean(submitted[question.id]) : finished;
  const isCorrect = sameAnswers(selected, question.correct);
  const noteTerms = searchTerms(search);
  const matchingNotes = useMemo(() => notes.filter((note) => matchesAnyTerm([note.title, note.keywords.join(" ")].join(" ").toLowerCase(), noteTerms)), [noteTerms, notes]);

  const choose = (choiceId: string) => {
    if (reveal) return;
    setAnswers((current) => {
      const existing = current[question.id] ?? [];
      const next = question.type === "single" ? [choiceId] : existing.includes(choiceId) ? existing.filter((id) => id !== choiceId) : [...existing, choiceId];
      return { ...current, [question.id]: next };
    });
  };
  const go = (next: number) => { setIndex(Math.max(0, Math.min(next, activeQuestions.length - 1))); setFinished(false); };
  const reset = () => { setIndex(0); setAnswers({}); setSubmitted({}); setFinished(false); localStorage.removeItem(storageKey); };
  const startSet = (ids: string[]) => { setQuestionIds(ids); setIndex(0); setAnswers({}); setSubmitted({}); setFinished(false); };
  const randomize = () => {
    const shuffled = [...matchingQuestions];
    for (let current = shuffled.length - 1; current > 0; current -= 1) {
      const target = Math.floor(Math.random() * (current + 1));
      [shuffled[current], shuffled[target]] = [shuffled[target], shuffled[current]];
    }
    startSet(shuffled.map((item) => item.id));
  };
  const startRandomSubset = () => {
    const shuffled = [...matchingQuestions];
    for (let current = shuffled.length - 1; current > 0; current -= 1) {
      const target = Math.floor(Math.random() * (current + 1));
      [shuffled[current], shuffled[target]] = [shuffled[target], shuffled[current]];
    }
    startSet(shuffled.slice(0, Math.min(questionLimit, shuffled.length)).map((item) => item.id));
  };
  const deshuffle = () => startSet(questions.map((item) => item.id));
  const bookmarks = new Set(bookmarkedIds);
  const bookmarkedQuestions = questions.filter((item) => bookmarks.has(item.id));
  const toggleBookmark = () => setBookmarkedIds((current) => current.includes(question.id) ? current.filter((id) => id !== question.id) : [...current, question.id]);
  const practiceBookmarks = () => startSet(bookmarkedQuestions.map((item) => item.id));

  return <div className="app-shell">
    <header className="topbar">
      <a className="brand" href="/">AWS <span>SAA</span> Quiz</a>
      <div className="progress"><span>{answered} of {activeQuestions.length} answered</span><div><i style={{ width: `${answered / activeQuestions.length * 100}%` }} /></div></div>
      <div className="answer-counts" aria-label={`${liveCorrectCount} correct and ${incorrectCount} incorrect`}><span className="correct-count">✓ {liveCorrectCount} correct</span><span className="incorrect-count">× {incorrectCount} incorrect</span></div>
      <button className="theme-toggle" onClick={() => setDarkMode((current) => !current)} aria-pressed={darkMode} aria-label={darkMode ? "Switch to light mode" : "Switch to dark mode"} title={darkMode ? "Switch to light mode" : "Switch to dark mode"}>
        <span aria-hidden="true">{darkMode ? "☀" : "☾"}</span> {darkMode ? "Light" : "Dark"}
      </button>
      <button className="text-button" onClick={reset}>Reset progress</button>
    </header>
    <div className="workspace">
      <section className="quiz-panel" aria-live="polite">
        <div className="quiz-meta"><span className="pill">{question.domain}</span><span>{question.services.join(" · ")}</span><span className={`difficulty ${question.difficulty}`}>{question.difficulty}</span></div>
        <p className="counter">Question {index + 1} / {activeQuestions.length}</p>
        <h1>{question.title}</h1>
        <button className={`bookmark-button ${bookmarks.has(question.id) ? "saved" : ""}`} onClick={toggleBookmark} aria-pressed={bookmarks.has(question.id)}>
          <span aria-hidden="true">{bookmarks.has(question.id) ? "★" : "☆"}</span> {bookmarks.has(question.id) ? "Bookmarked" : "Bookmark question"}
        </button>
        <p className="instruction">{question.type === "multiple" ? "Select all answers that apply." : "Select one answer."}</p>
        <div className="choices">
          {question.choices.map((choice, choiceIndex) => {
            const picked = selected.includes(choice.id);
            const correct = question.correct.includes(choice.id);
            const className = reveal ? correct ? "choice correct" : picked ? "choice incorrect" : "choice" : picked ? "choice selected" : "choice";
            return <button key={choice.id} className={className} onClick={() => choose(choice.id)} aria-pressed={picked}>
              <span className="choice-letter">{String.fromCharCode(65 + choiceIndex)}</span><span>{choice.text}</span>{reveal && correct && <b>Correct</b>}
            </button>;
          })}
        </div>
        {reveal && <article className={`feedback ${isCorrect ? "success" : "failure"}`}><strong>{isCorrect ? "Correct — nice work." : "Not quite."}</strong><p>{normalize(question.explanation)}</p></article>}
        {finished && <section className="score"><p>Quiz complete</p><h2>{correctCount} / {activeQuestions.length}</h2><span>{Math.round(correctCount / activeQuestions.length * 100)}% correct</span><button onClick={reset}>Start again</button></section>}
        <footer className="quiz-actions">
          <button className="secondary" onClick={() => go(index - 1)} disabled={index === 0}>← Previous</button>
          {mode === "instant" && !submitted[question.id] && <button onClick={() => setSubmitted((state) => ({ ...state, [question.id]: true }))} disabled={!selected.length}>Check answer</button>}
          {index < activeQuestions.length - 1 ? <button onClick={() => go(index + 1)}>Next question →</button> : <button onClick={() => setFinished(true)} disabled={answered < activeQuestions.length}>Finish quiz</button>}
        </footer>
      </section>
      <aside className="study-panel">
        <section className="question-picker" aria-labelledby="question-picker-title">
          <div><p className="eyebrow">Question picker</p><h2 id="question-picker-title">Build a quiz</h2></div>
          <input className="search" value={questionSearch} onChange={(event) => setQuestionSearch(event.target.value)} placeholder="Filter questions: EC2, S3, VPC, ALB…" aria-label="Filter quiz questions" />
          <div className="question-limit"><label htmlFor="question-limit">Questions per quiz <strong>{Math.min(questionLimit, matchingQuestions.length)}</strong></label><input id="question-limit" type="range" min="1" max={Math.max(1, matchingQuestions.length)} value={Math.min(questionLimit, Math.max(1, matchingQuestions.length))} onChange={(event) => setQuestionLimit(Number(event.target.value))} /></div>
          <div className="picker-actions"><button className="shuffle-button" onClick={randomize} disabled={!matchingQuestions.length}>Shuffle all {matchingQuestions.length} matching questions</button><button className="shuffle-button secondary-picker" onClick={startRandomSubset} disabled={!matchingQuestions.length}>Start a {Math.min(questionLimit, matchingQuestions.length)}-question set</button><button className="bookmark-set-button" onClick={practiceBookmarks} disabled={!bookmarkedQuestions.length}>★ Practice {bookmarkedQuestions.length} bookmarked {bookmarkedQuestions.length === 1 ? "question" : "questions"}</button><button className="text-button deshuffle-button" onClick={deshuffle}>Deshuffle: restore default order</button></div>
          <p className="picker-summary">{matchingQuestions.length} of {questions.length} questions match. Search checks question text, services, domains, and tags. Bookmarks are saved in this browser.</p>
        </section>
        <div className="study-head"><div><p className="eyebrow">Study companion</p><h2>Notes</h2></div><label className="toggle"><input type="checkbox" checked={mode === "end"} onChange={(event) => setMode(event.target.checked ? "end" : "instant")} /><span /> End feedback</label></div>
        <input className="search" value={search} onChange={(event) => setSearch(event.target.value)} placeholder="Search note titles or keywords: ALB, SQS…" aria-label="Search note titles or keywords" />
        <div className="note-list">{matchingNotes.map((note) => <button className="note" key={note.id} onClick={() => setSelectedNote(note)}><div><span className="pill">{note.domain}</span><h3>{note.title}</h3></div><small>{note.services.join(" · ")} · {note.tags.join(", ")}</small><span className="open-note">Open note →</span></button>)}{!matchingNotes.length && <p className="no-results">No note titles match.</p>}</div>
      </aside>
    </div>
    {selectedNote && <div className="note-viewer-backdrop" role="presentation" onClick={() => setSelectedNote(null)}><section className="note-viewer" role="dialog" aria-modal="true" aria-label={selectedNote.title} onClick={(event) => event.stopPropagation()}><header><span className="pill">{selectedNote.domain}</span><button className="close-viewer" onClick={() => setSelectedNote(null)} aria-label="Close note viewer">Close ×</button></header><article className="markdown"><ReactMarkdown remarkPlugins={[remarkGfm]} components={{ pre: ({ children }) => <>{children}</>, code: ({ children, className, ...props }) => { const language = /language-(\w+)/.exec(className ?? "")?.[1]; if (language === "mermaid") return <MermaidDiagram chart={String(children).replace(/\n$/, "")} />; return language ? <pre><code className={className} {...props}>{children}</code></pre> : <code className={className} {...props}>{children}</code>; } }}>{selectedNote.body}</ReactMarkdown></article></section></div>}
  </div>;
}
