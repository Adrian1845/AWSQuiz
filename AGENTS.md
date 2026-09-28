# AWS SAA Quiz — Agent Guide

## Project scope

This is a static AWS Certified Solutions Architect – Associate study app. It uses Astro, TypeScript, and a single React quiz island. There is no backend, database, authentication, or server-side user state.

## Project map

- `src/pages/index.astro` loads reviewed content and passes it to the quiz.
- `src/components/QuizWorkspace.tsx` owns interactive quiz state, note viewing, bookmarks, and browser persistence.
- `src/content.config.ts` defines the content schemas.
- `src/content/questions/<domain>/*.md` contains one question per Markdown file.
- `src/content/notes/<domain>/*.md` contains study notes.
- `imports/questions/` is the temporary inbox for exported question JSON.
- `scripts/import-questions.mjs` validates and converts inbox exports to Markdown.

## Content rules

- Keep one question per file and give it a unique, stable `id`.
- Questions must comply with the `questions` schema: choices use stable IDs, `correct` is always an array, and `status` is `draft`, `reviewed`, or `retired`.
- Only `reviewed` questions appear in the quiz. Do not silently promote drafts without review.
- Notes require `title`, `domain`, `services`, `tags`, and `keywords`. Keep headings descriptive because notes are searched in the UI.
- Update `lastReviewed` when revising factual AWS content. Use official AWS documentation to verify time-sensitive service details.
- Do not change the schema or naming conventions without updating the importer, content, and README together.

## Question imports

1. Place source exports in `imports/questions/`.
2. Preview the conversion with `npm run import:questions`.
3. Resolve every validation or duplicate-ID error before continuing.
4. Commit the import with `npm run import:questions -- --commit`.

The commit command writes Markdown question files and deletes only its successfully processed source inputs. Current exports can contain adjacent JSON documents; the importer de-duplicates matching source question IDs.

## Implementation conventions

- Prefer Astro for content loading and page structure; keep stateful UI in React.
- Persist browser-only preferences under versioned `localStorage` keys. Do not access `localStorage` during server rendering.
- Do not add a backend or cloud service for features that can remain static and local.
- Preserve the active question answer when adding navigation, note, or bookmark features.
- Keep styles in `src/styles/global.css` unless a component-specific styling approach is introduced deliberately.

## Validation

Run these after changes:

```bash
npx tsc --noEmit
npm run build
```

For content imports, always run the non-destructive preview before `--commit`.
