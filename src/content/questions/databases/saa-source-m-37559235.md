---
id: saa-source-m-37559235
title: "An analytics application is currently performing its queries against your main production RDS database. These queries run at any time of the day and slow down the RDS database which impacts your users' experience. What should you do to improve the users' experience?"
domain: databases
services: ["RDS", "Aurora", "ElastiCache"]
difficulty: medium
type: single
choices:
  - id: a
    text: "Setup a Read Replica"
  - id: b
    text: "Setup Multi-AZ"
  - id: c
    text: "Run the analytics queries at night"
correct: ["a"]
references: []
tags: ["rds", "aurora", "elasticache", "imported"]
status: reviewed
lastReviewed: 2026-09-17
---

## Explanation

Read Replicas will help as your analytics application can now perform queries against it, and these queries won't impact the main production RDS database.

## Why the other options are incorrect

- **Setup Multi-AZ:** Multi-AZ is used for high availability, meaning that the standby DB instance can't be used by our applications.
- **Run the analytics queries at night:** This won't be suitable here as the question mentioned that analytics queries can be run any time of the day.
