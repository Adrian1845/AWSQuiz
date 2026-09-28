import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const questions = defineCollection({
  loader: glob({ base: "./src/content/questions", pattern: "**/*.md" }),
  schema: z.object({
    id: z.string(),
    title: z.string(),
    domain: z.string(),
    services: z.array(z.string()),
    difficulty: z.enum(["easy", "medium", "hard"]),
    type: z.enum(["single", "multiple"]),
    choices: z.array(z.object({ id: z.string(), text: z.string() })).min(2),
    correct: z.array(z.string()).min(1),
    references: z.array(z.object({ note: z.string(), section: z.string().optional() })).default([]),
    tags: z.array(z.string()).default([]),
    status: z.enum(["draft", "reviewed", "retired"]),
    lastReviewed: z.coerce.date(),
  }),
});

const notes = defineCollection({
  loader: glob({ base: "./src/content/notes", pattern: ["**/*.md", "!**/README.md"] }),
  schema: z.object({
    title: z.string(),
    domain: z.string(),
    services: z.array(z.string()),
    tags: z.array(z.string()).default([]),
    keywords: z.array(z.string()),
  }),
});

export const collections = { questions, notes };
