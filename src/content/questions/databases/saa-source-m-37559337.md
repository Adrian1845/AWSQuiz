---
id: saa-source-m-37559337
title: "You would like to create a disaster recovery strategy for your RDS PostgreSQL database so that in case of a regional outage the database can be quickly made available for both read and write workloads in another AWS Region. The DR database must be highly available. What do you recommend?"
domain: databases
services: ["RDS", "Aurora", "ElastiCache"]
difficulty: medium
type: single
choices:
  - id: a
    text: "Create a Read Replica in the same region and enable Multi-AZ on the main database"
  - id: b
    text: "Create a Read Replica in a different region and enable Multi-AZ on the Read Replica"
  - id: c
    text: "Create a Read Replica in the same region and enable Multi-AZ on the Read Replica"
  - id: d
    text: "Enable Multi-Region option on the main database"
correct: ["b"]
references: []
tags: ["rds", "aurora", "elasticache", "imported"]
status: reviewed
lastReviewed: 2026-09-17
---

## Explanation

The correct answer is **Create a Read Replica in a different region and enable Multi-AZ on the Read Replica**.
