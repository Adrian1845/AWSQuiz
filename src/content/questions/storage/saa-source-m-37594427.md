---
id: saa-source-m-37594427
title: "Which deployment option in the FSx file system provides you with long-term storage that's replicated within AZ?"
domain: storage
services: ["S3", "EBS", "EFS", "FSx", "DataSync", "Storage Gateway"]
difficulty: medium
type: single
choices:
  - id: a
    text: "Scratch File System"
  - id: b
    text: "Persistent File System"
correct: ["b"]
references: []
tags: ["storage", "imported"]
status: reviewed
lastReviewed: 2026-09-24
---

## Explanation

Provides long-term storage where data is replicated within the same AZ. Failed files were replaced within minutes.

## Why the other options are incorrect

- **Scratch File System:** Provides temporary storage where data is not replicated.
