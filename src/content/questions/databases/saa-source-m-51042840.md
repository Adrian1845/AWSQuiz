---
id: saa-source-m-51042840
title: "Your development team would like to perform a suite of read and write tests against your production Aurora database because they need access to production data as soon as possible. What do you advise?"
domain: databases
services: ["RDS", "Aurora", "ElastiCache"]
difficulty: medium
type: single
choices:
  - id: a
    text: "Create an Aurora Read Replica for them"
  - id: b
    text: "Do the test against the production database"
  - id: c
    text: "Make a DB Snapshot and Restore it into a new database"
  - id: d
    text: "Use the Aurora Cloning feature"
correct: ["d"]
references: []
tags: ["rds", "aurora", "elasticache", "imported"]
status: reviewed
lastReviewed: 2026-09-17
---

## Explanation

The correct answer is **Use the Aurora Cloning feature**.

## Why the other options are incorrect

- **Create an Aurora Read Replica for them:** This won't work for writes
- **Do the test against the production database:** This will impact your customers
- **Make a DB Snapshot and Restore it into a new database:** This is slower than Aurora Cloning
