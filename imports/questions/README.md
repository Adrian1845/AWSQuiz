# Question JSON inbox

Paste one or more `.json` files into this folder, then ask Codex to review and import them. The importer creates one Markdown question per entry under `src/content/questions/<domain>/`.

Run a non-destructive preview first:

```bash
npm run import:questions
```

After review, import and remove only successfully processed JSON files:

```bash
npm run import:questions -- --commit
```

Each file may contain one question object or an array. Use this shape when possible:

```json
{
  "id": "saa-custom-001",
  "title": "A company needs ... Which option should it use?",
  "domain": "security",
  "services": ["KMS", "S3"],
  "difficulty": "medium",
  "type": "single",
  "choices": [
    { "id": "a", "text": "First option" },
    { "id": "b", "text": "Correct option" },
    { "id": "c", "text": "Third option" },
    { "id": "d", "text": "Fourth option" }
  ],
  "correct": ["b"],
  "references": [{ "note": "encryption-and-secrets" }],
  "tags": ["kms", "encryption"],
  "explanation": "Why the correct answer is the best fit."
}
```

`question` can be used instead of `title`, `options` instead of `choices`, and a numeric answer index or answer text can be used instead of `correct`. Every imported question is marked `draft` for review before it appears in the quiz.
