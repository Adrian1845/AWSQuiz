---
id: saa-source-m-37559575
title: "You have an un-encrypted RDS DB instance and you want to create Read Replicas. Can you configure the RDS Read Replicas to be encrypted?"
domain: databases
services: ["RDS", "Aurora", "ElastiCache"]
difficulty: medium
type: single
choices:
  - id: a
    text: "No"
  - id: b
    text: "Yes"
correct: ["a"]
references: []
tags: ["rds", "aurora", "elasticache", "imported"]
status: reviewed
lastReviewed: 2026-09-17
---

## Explanation

You can not create encrypted Read Replicas from an unencrypted RDS DB instance.
