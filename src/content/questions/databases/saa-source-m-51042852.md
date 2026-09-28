---
id: saa-source-m-51042852
title: "You have 100 EC2 instances connected to your RDS database and you see that upon a maintenance of the database, all your applications take a lot of time to reconnect to RDS, due to poor application logic. How do you improve this?"
domain: databases
services: ["RDS", "Aurora", "ElastiCache"]
difficulty: medium
type: single
choices:
  - id: a
    text: "Fix all the applications"
  - id: b
    text: "Disable Multi-AZ"
  - id: c
    text: "Enable Multi-AZ"
  - id: d
    text: "Use an RDS Proxy"
correct: ["d"]
references: []
tags: ["rds", "aurora", "elasticache", "imported"]
status: reviewed
lastReviewed: 2026-09-17
---

## Explanation

This reduces the failover time by up to 66% and keeps connection actives for your applications
