---
id: saa-original-013
title: "A healthcare provider requires a managed way to provide automatic relational database failover during an Availability Zone failure. Which AWS option is the best fit?"
domain: databases
services: [Amazon RDS]
difficulty: easy
type: single
choices:
  - id: a
    text: Amazon RDS Multi-AZ
  - id: b
    text: An RDS read replica
  - id: c
    text: Amazon ElastiCache
  - id: d
    text: Amazon Redshift
correct: [a]
references: [{ note: rds-and-aurora }]
tags: [high-availability,relational-database, practice-bank]
status: reviewed
lastReviewed: 2026-09-15
---

## Explanation

**Amazon RDS Multi-AZ** is the best fit because it is designed to provide automatic relational database failover during an Availability Zone failure. The other options do not directly satisfy the stated requirement.
