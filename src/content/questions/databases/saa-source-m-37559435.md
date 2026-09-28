---
id: saa-source-m-37559435
title: "How do you encrypt an unencrypted RDS DB instance?"
domain: databases
services: ["RDS", "Aurora", "ElastiCache"]
difficulty: medium
type: single
choices:
  - id: a
    text: "Do it straight from AWS Console, select your RDS DB instance, choose Actions then Encrypt using KMS"
  - id: b
    text: "Do it straight from AWS Console, after stopping the RDS DB instance"
  - id: c
    text: "Create a snapshot of the unencrypted RDS DB instance, copy the snapshot and tick \"Enable encryption\", then restore the RDS DB instance from the encrypted snapshot"
correct: ["c"]
references: []
tags: ["rds", "aurora", "elasticache", "imported"]
status: reviewed
lastReviewed: 2026-09-17
---

## Explanation

The correct answer is **Create a snapshot of the unencrypted RDS DB instance, copy the snapshot and tick "Enable encryption", then restore the RDS DB instance from the encrypted snapshot**.
