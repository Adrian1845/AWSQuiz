---
id: saa-source-m-37559319
title: "How can you enhance the security of your ElastiCache Redis Cluster by allowing users to access your ElastiCache Redis Cluster using their IAM Identities (e.g., Users, Roles)?"
domain: databases
services: ["RDS", "Aurora", "ElastiCache"]
difficulty: medium
type: single
choices:
  - id: a
    text: "Using Redis Authentication"
  - id: b
    text: "Using IAM Authentication"
  - id: c
    text: "Use Security Groups"
correct: ["b"]
references: []
tags: ["rds", "aurora", "elasticache", "imported"]
status: reviewed
lastReviewed: 2026-09-17
---

## Explanation

The correct answer is **Using IAM Authentication**.

## Why the other options are incorrect

- **Using Redis Authentication:** Using Redis Authentication, Redis requires a password before allowing clients to run commands.
- **Use Security Groups:** Security Groups helps filter traffic going to your ElastiCache Redis Cluster instances but cannot help with application-level authentication.
