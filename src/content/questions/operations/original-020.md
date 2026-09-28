---
id: saa-original-020
title: "What should a solutions architect choose for a software vendor that needs to migrate a database with minimal downtime while the source stays available?"
domain: operations
services: [AWS DMS]
difficulty: medium
type: single
choices:
  - id: a
    text: AWS Schema Conversion Tool
  - id: b
    text: AWS Application Migration Service
  - id: c
    text: AWS DataSync
  - id: d
    text: AWS Database Migration Service
correct: [d]
references: [{ note: migration-and-backup }]
tags: [migration,databases, practice-bank]
status: reviewed
lastReviewed: 2026-09-15
---

## Explanation

**AWS Database Migration Service** is the best fit because it is designed to migrate a database with minimal downtime while the source stays available. The other options do not directly satisfy the stated requirement.
