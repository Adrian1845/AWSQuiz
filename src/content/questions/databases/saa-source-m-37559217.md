---
id: saa-source-m-37559217
title: "Which RDS (NOT Aurora) feature when used does not require you to change the SQL connection string?"
domain: databases
services: ["RDS", "Aurora", "ElastiCache"]
difficulty: medium
type: single
choices:
  - id: a
    text: "Multi-AZ"
  - id: b
    text: "Read Replicas"
correct: ["a"]
references: []
tags: ["rds", "aurora", "elasticache", "imported"]
status: reviewed
lastReviewed: 2026-09-17
---

## Explanation

Multi-AZ keeps the same connection string regardless of which database is up.

## Why the other options are incorrect

- **Read Replicas:** Read Replicas add new endpoints with their own DNS name. We need to change our application to reference them individually to balance the read load.
