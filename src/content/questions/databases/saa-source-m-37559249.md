---
id: saa-source-m-37559249
title: "You would like to ensure you have a replica of your database available in another AWS Region if a disaster happens to your main AWS Region. Which database do you recommend to implement this easily?"
domain: databases
services: ["RDS", "Aurora", "ElastiCache"]
difficulty: medium
type: single
choices:
  - id: a
    text: "RDS Read Replicas"
  - id: b
    text: "RDS Multi-AZ"
  - id: c
    text: "Aurora Read Replicas"
  - id: d
    text: "Aurora Global Database"
correct: ["d"]
references: []
tags: ["rds", "aurora", "elasticache", "imported"]
status: reviewed
lastReviewed: 2026-09-17
---

## Explanation

Aurora Global Databases allows you to have an Aurora Replica in another AWS Region, with up to 5 secondary regions.

## Why the other options are incorrect

- **RDS Read Replicas:** Read Replicas cannot help with disaster recovery.
- **RDS Multi-AZ:** Multi-AZ won't help when a disaster happens at the AWS region level. Multi-AZ helps when a disaster happens at the AZ level.
- **Aurora Read Replicas:** Read Replicas cannot help with disaster recovery.
