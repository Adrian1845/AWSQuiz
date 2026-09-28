---
id: saa-source-m-37559197
title: "We have an RDS database that struggles to keep up with the demand of requests from our website. Our million users mostly read news, and we don't post news very often. Which solution is NOT adapted to this problem?"
domain: databases
services: ["RDS", "Aurora", "ElastiCache"]
difficulty: medium
type: single
choices:
  - id: a
    text: "An ElastiCache Cluster"
  - id: b
    text: "RDS Multi-AZ"
  - id: c
    text: "RDS Read Replicas"
correct: ["b"]
references: []
tags: ["rds", "aurora", "elasticache", "imported"]
status: reviewed
lastReviewed: 2026-09-17
---

## Explanation

Be very careful with the way you read questions at the exam. Here, the question is asking which solution is NOT adapted to this problem. ElastiCache and RDS Read Replicas do indeed help with scaling reads.
