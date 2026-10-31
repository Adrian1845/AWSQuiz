# AWS SAA Quiz

A static AWS Certified Solutions Architect – Associate study app built with Astro, TypeScript, and a React quiz workspace. Questions and study notes are Markdown content collections, so the app needs no database, backend, or AWS account to run locally.

## Project structure

```text
src/pages/index.astro                 Loads reviewed content into the quiz
src/components/QuizWorkspace.tsx      Interactive quiz, notes, bookmarks, and preferences
src/content.config.ts                 Content-collection schemas
src/content/questions/<domain>/*.md   One Markdown file per question
src/content/notes/<domain>/*.md       Searchable study notes
imports/questions/                    Temporary inbox for question JSON exports
scripts/import-questions.mjs          Validates and converts inbox exports
scripts/analyze-exam-results.mjs      Joins scored attempts to imported questions
```

Keep the app static: interactive state belongs in the React workspace and browser-only preferences belong in `localStorage`. There is intentionally no backend, account system, or shared user state.

## What is included

- 358 reviewed AWS SAA questions across compute, storage, networking, security, databases, integration, architecture, operations, data analytics, and machine learning.
- Single- and multiple-answer questions with instant or end-of-quiz feedback.
- Question filtering, shuffling, custom-length quiz sets, scoring, and browser-saved progress.
- Persistent browser bookmarks and bookmarked-only practice sets.
- 42 searchable Markdown study notes, including rendered Mermaid diagrams.

## Requirements

- Node.js 20.18 or later (a current LTS release is recommended).
- npm, which is included with Node.js.

Check your installed versions:

```bash
node --version
npm --version
```

## Run locally

From the project directory, install dependencies and start Astro's development server:

```bash
npm install
npm run dev
```

Open the local URL printed by Astro (normally [http://localhost:4321](http://localhost:4321)). The development server reloads when source or content files change.

To make the server available on your local network:

```bash
npm run dev -- --host 0.0.0.0
```

Stop the server with `Ctrl+C`.

## Production preview and validation

Create a production build:

```bash
npm run build
```

Preview the generated `dist/` site locally:

```bash
npm run preview
```

Run TypeScript validation:

```bash
npx tsc --noEmit
```

`npm run check` is available for Astro's optional checker. If you intend to use it, install its missing development dependency once:

```bash
npm install --save-dev @astrojs/check
npm run check
```

## Add or import questions

Questions are stored in `src/content/questions/<domain>/` as one Markdown file per question. The schema in `src/content.config.ts` validates their frontmatter. Only questions with `status: reviewed` appear in the quiz.

Use a unique, stable `id`; do not reuse an ID when changing a question. Keep choice IDs stable as well, and set `lastReviewed` whenever factual AWS content is revised. Questions should remain `draft` until they have been reviewed—do not promote imported content automatically.

To import exported question JSON, place the files in `imports/questions/`, then preview before modifying content:

```bash
npm run import:questions
```

When the preview reports the expected counts and no errors, write the Markdown files:

```bash
npm run import:questions -- --commit
```

The commit command deletes only the source files it processed successfully. It supports the current exported format, including files containing adjacent JSON documents and exam assessment exports, and avoids importing duplicate source question IDs. Exam result files in the same inbox are ignored and preserved for analysis. Imported questions stay `draft` until reviewed.

For scored exam exports, run `node scripts/analyze-exam-results.mjs` to join each result's `assessment.id` with its imported question. The current findings and study links are in [the exam summary](docs/exams/resumen-examenes.md); [exam 1](docs/exams/exam1-analisis.md) has a more detailed review.

To author a question manually, use stable choice IDs and keep `correct` as an array:

```md
---
id: saa-example-001
title: "Which service is best for this workload?"
domain: storage
services: [S3]
difficulty: medium
type: single
choices:
  - id: a
    text: "First option"
  - id: b
    text: "Correct option"
correct: [b]
references: []
tags: [example]
status: draft
lastReviewed: 2026-09-24
---

## Explanation

Explain why the correct option is the best fit.
```

## Add study notes

Add Markdown files below `src/content/notes/<domain>/`. Notes must include this frontmatter:

```yaml
---
title: Amazon S3
domain: storage
services: [S3]
tags: [object-storage]
keywords: [s3, object-storage]
---
```

Use meaningful headings and `keywords`; they are used by the in-app note search. Standard Markdown, tables, and Mermaid code blocks are supported.

## Browser-saved data

Quiz progress, feedback preference, bookmarks, and the color theme are stored only in the current browser's local storage. They are not shared between browsers or devices. Use the app's **Reset progress** action to clear quiz progress; bookmarks and the selected theme remain. Clearing this site's browser storage removes all of them.

## Troubleshooting

- **Port already in use:** Astro will normally choose another port. Supply one explicitly with `npm run dev -- --port 4322`.
- **Import fails:** Run the preview command, correct the named file or duplicate ID, and rerun. No output files are written during preview.
- **Question is not visible:** Confirm its frontmatter has `status: reviewed` and that its schema fields are valid.
- **Bookmarks or progress are missing:** They are scoped to one browser profile. Check browser site-data settings before assuming the app lost content.

See [AGENTS.md](AGENTS.md) for repository conventions and the expected workflow for changes.
