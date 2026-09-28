---
id: saa-source-m-37559185
title: "You're planning for a new solution that requires a MySQL database that must be available even in case of a disaster in one of the Availability Zones. What should you use?"
domain: databases
services: ["RDS", "Aurora", "ElastiCache"]
difficulty: medium
type: single
choices:
  - id: a
    text: "Create Read Replicas"
  - id: b
    text: "Enable Encryption"
  - id: c
    text: "Enable Multi-AZ"
correct: ["c"]
references: []
tags: ["rds", "aurora", "elasticache", "imported"]
status: reviewed
lastReviewed: 2026-09-17
---

## Explanation

Multi-AZ helps when you plan a disaster recovery for an entire AZ going down. If you plan against an entire AWS Region going down, you should use backups and replication across AWS Regions.

## Why the other options are incorrect

- **Create Read Replicas:** Read Replicas don't help with disaster recovery, it helps then you want to scale reads across AZs.
