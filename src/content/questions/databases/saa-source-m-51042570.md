---
id: saa-source-m-51042570
title: "You need to store long-term backups for your Aurora database for disaster recovery and audit purposes. What do you recommend?"
domain: databases
services: ["RDS", "Aurora", "ElastiCache"]
difficulty: medium
type: single
choices:
  - id: a
    text: "Enable Automated Backups"
  - id: b
    text: "Perform On Demand Backups"
  - id: c
    text: "Use Aurora Database Cloning"
correct: ["b"]
references: []
tags: ["rds", "aurora", "elasticache", "imported"]
status: reviewed
lastReviewed: 2026-09-17
---

## Explanation

The correct answer is **Perform On Demand Backups**.

## Why the other options are incorrect

- **Enable Automated Backups:** The maximum retention is only 35 days
