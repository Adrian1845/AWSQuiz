import { readFileSync, readdirSync } from "node:fs";
import { join } from "node:path";

const root = process.cwd();
const questionsRoot = join(root, "src/content/questions");
const inbox = join(root, "imports/questions");
const questions = new Map();

for (const domain of readdirSync(questionsRoot, { withFileTypes: true }).filter((entry) => entry.isDirectory())) {
  for (const file of readdirSync(join(questionsRoot, domain.name)).filter((name) => name.startsWith("saa-source-") && name.endsWith(".md"))) {
    const markdown = readFileSync(join(questionsRoot, domain.name, file), "utf8");
    const field = (name) => markdown.match(new RegExp(`^${name}: (.+)$`, "m"))?.[1];
    const id = field("id")?.replace("saa-source-", "");
    if (!id || questions.has(id)) throw new Error(`Missing or duplicate question ID in ${file}`);
    const tags = JSON.parse(field("tags"));
    const exam = tags.find((tag) => /^exam\d+$/.test(tag));
    if (!exam) continue;
    const choices = [...markdown.matchAll(/^  - id: ([a-z])\r?\n    text: (.+)$/gm)].map((match) => ({ id: match[1], text: JSON.parse(match[2]) }));
    questions.set(id, {
      id,
      title: JSON.parse(field("title")),
      section: tags.find((tag) => tag.startsWith("design-")),
      exam,
      services: JSON.parse(field("services")),
      type: field("type"),
      choices,
      correct: JSON.parse(field("correct")),
      file: join("src/content/questions", domain.name, file).replaceAll("\\", "/"),
    });
  }
}

const attempts = [];
const seenAttempts = new Set();
for (const file of readdirSync(inbox).filter((name) => /^exam\d+results\.json$/.test(name)).sort()) {
  const entries = JSON.parse(readFileSync(join(inbox, file), "utf8")).results;
  if (!entries?.every((entry) => entry._class === "user_answers_assessment")) {
    console.error(`Skipping ${file}: it does not contain scored answers.`);
    continue;
  }
  for (const entry of entries) {
    if (seenAttempts.has(entry.assessment?.id)) throw new Error(`${file}: duplicate assessment ID ${entry.assessment?.id}`);
    seenAttempts.add(entry.assessment?.id);
    const question = questions.get(String(entry.assessment?.id));
    if (!question) throw new Error(`${file}: unknown assessment ID ${entry.assessment?.id}`);
    if (question.exam !== file.replace("results.json", "")) throw new Error(`${file}: question ${question.id} belongs to ${question.exam}`);
    const score = entry.score?.parsedValue;
    if (score !== 0 && score !== 1) throw new Error(`${file}: invalid score for ${question.id}`);
    attempts.push({ ...question, score, response: entry.response });
  }
}

const summarize = (rows) => ({ total: rows.length, correct: rows.filter((row) => row.score === 1).length, wrong: rows.filter((row) => row.score === 0).length });
const group = (rows, key) => Object.entries(Object.groupBy(rows, key)).map(([name, groupRows]) => ({ name, ...summarize(groupRows) })).sort((a, b) => b.wrong - a.wrong || b.total - a.total);
const exams = group(attempts, (row) => row.exam).sort((a, b) => a.name.localeCompare(b.name, undefined, { numeric: true }));
for (const exam of exams) {
  const expected = [...questions.values()].filter((question) => question.exam === exam.name).length;
  if (exam.total > expected) throw new Error(`${exam.name}: ${exam.total} scores for ${expected} questions`);
  exam.questionCount = expected;
}
const sections = group(attempts, (row) => row.section);
const examSections = exams.map((exam) => ({ exam: exam.name, sections: group(attempts.filter((row) => row.exam === exam.name), (row) => row.section) }));
const types = group(attempts, (row) => row.type);
const services = [...new Set(attempts.flatMap((row) => row.services))].map((name) => ({ name, ...summarize(attempts.filter((row) => row.services.includes(name))) })).sort((a, b) => b.wrong - a.wrong || b.total - a.total);
const examServices = exams.map((exam) => ({ exam: exam.name, services: [...new Set(attempts.filter((row) => row.exam === exam.name).flatMap((row) => row.services))].map((name) => ({ name, ...summarize(attempts.filter((row) => row.exam === exam.name && row.services.includes(name))) })).sort((a, b) => b.wrong - a.wrong || b.total - a.total) }));
const wrong = attempts.filter((row) => row.score === 0).map(({ id, exam, section, services, type, title, response, file }) => ({ id, exam, section, services, type, title, response, file }));
const uniqueTitles = Object.values(Object.groupBy(attempts, (row) => row.title.replace(/\s+/g, " ").trim().toLowerCase()));
const repetition = {
  uniqueQuestions: uniqueTitles.length,
  repeatedQuestions: uniqueTitles.filter((rows) => rows.length > 1).length,
  questionsMissedAtLeastOnce: uniqueTitles.filter((rows) => rows.some((row) => row.score === 0)).length,
  questionsMissedTwice: uniqueTitles.filter((rows) => rows.filter((row) => row.score === 0).length > 1).length,
};

const topicIndex = process.argv.indexOf("--topic");
if (topicIndex >= 0) {
  const term = process.argv[topicIndex + 1]?.toLowerCase();
  if (!term) throw new Error("Pass a search term after --topic");
  const attemptsById = new Map(attempts.map((row) => [row.id, row]));
  const matches = [...questions.values()].filter((question) => [question.title, ...question.services, ...question.choices.map((choice) => choice.text)].some((value) => value.toLowerCase().includes(term))).map((question) => {
    const attempt = attemptsById.get(question.id);
    const choiceText = (id) => question.choices.find((choice) => choice.id === id)?.text;
    return {
      exam: question.exam, id: question.id, title: question.title,
      matchesQuestion: [question.title, ...question.services].some((value) => value.toLowerCase().includes(term)),
      score: attempt?.score ?? null,
      response: attempt?.response?.map((id) => ({ id, text: choiceText(id) })) ?? null,
      correct: question.correct.map((id) => ({ id, text: choiceText(id) })),
      file: question.file,
    };
  }).sort((a, b) => a.exam.localeCompare(b.exam, undefined, { numeric: true }) || Number(a.id) - Number(b.id));
  if (process.argv.includes("--markdown")) {
    const status = (row) => row.score === 1 ? "Acertada" : row.score === 0 ? "Fallada" : "Sin respuesta";
    const excerpt = (title) => title.length > 145 ? `${title.slice(0, 142).trimEnd()}…` : title;
    const sections = [
      ["Preguntas centradas en SQS", matches.filter((row) => row.matchesQuestion)],
      ["SQS aparece como alternativa", matches.filter((row) => !row.matchesQuestion)],
    ];
    console.log("# Preguntas de SQS en los exámenes\n");
    console.log(`${matches.length} preguntas mencionan SQS en el enunciado, los servicios o las opciones. Los resultados proceden de los archivos importados; \"sin respuesta\" incluye las preguntas pendientes del examen 2 y todo el examen 7.\n`);
    for (const [heading, rows] of sections) {
      console.log(`## ${heading} (${rows.length})\n`);
      for (const [exam, examRows] of Object.entries(Object.groupBy(rows, (row) => row.exam))) {
        console.log(`### ${exam.replace("exam", "Examen ")}\n`);
        for (const row of examRows) console.log(`- [${row.id}](../../${row.file}) · ${status(row)} · ${excerpt(row.title)}`);
        console.log();
      }
    }
  } else if (process.argv.includes("--compact")) {
    for (const row of matches) {
      console.log([row.exam, row.id, row.score ?? "-", row.matchesQuestion ? "main" : "choice", row.response?.map((choice) => choice.id).join(",") ?? "-", row.correct.map((choice) => choice.id).join(","), row.file, row.title.slice(0, 110)].join("\t"));
    }
  } else {
    console.log(JSON.stringify(matches, null, 2));
  }
} else if (process.argv.includes("--repeats")) {
  for (const rows of Object.values(Object.groupBy(attempts, (row) => row.title.replace(/\s+/g, " ").trim().toLowerCase())).filter((rows) => rows.length > 1)) {
    console.log(`${rows.map((row) => `${row.exam}:${row.id}:${row.score}`).join(", ")}\t${rows[0].title.slice(0, 130)}`);
  }
} else if (process.argv.includes("--wrong")) {
  for (const row of wrong) console.log([row.exam, row.id, row.section, row.type, row.services.join("; "), row.title.slice(0, 165)].join("\t"));
} else {
  console.log(JSON.stringify({ overall: summarize(attempts), repetition, exams, sections, examSections, types, services, examServices }, null, 2));
}
