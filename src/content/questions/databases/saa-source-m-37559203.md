---
id: saa-source-m-37559203
title: "You have set up read replicas on your RDS database, but users are complaining that upon updating their social media posts, they do not see their updated posts right away. What is a possible cause for this?"
domain: databases
services: ["RDS", "Aurora", "ElastiCache"]
difficulty: medium
type: single
choices:
  - id: a
    text: "There must be a bug in your application"
  - id: b
    text: "Read Replicas have Asynchronous Replication, therefore it's likely your users will only read Eventual Consistency"
  - id: c
    text: "You should have setup Multi-AZ instead"
correct: ["b"]
references: []
tags: ["rds", "aurora", "elasticache", "imported"]
status: reviewed
lastReviewed: 2026-09-17
---

## Explanation

The correct answer is **Read Replicas have Asynchronous Replication, therefore it's likely your users will only read Eventual Consistency**.
