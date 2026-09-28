---
id: saa-source-m-37559349
title: "You have migrated the MySQL database from on-premises to RDS. You have a lot of applications and developers interacting with your database. Each developer has an IAM user in the company's AWS account. What is a suitable approach to give access to developers to the MySQL RDS DB instance instead of creating a DB user for each one?"
domain: databases
services: ["RDS", "Aurora", "ElastiCache"]
difficulty: medium
type: single
choices:
  - id: a
    text: "By default IAM users have access to your RDS database"
  - id: b
    text: "Use Amazon Cognito"
  - id: c
    text: "Enable IAM Database Authentication"
correct: ["c"]
references: []
tags: ["rds", "aurora", "elasticache", "imported"]
status: reviewed
lastReviewed: 2026-09-17
---

## Explanation

The correct answer is **Enable IAM Database Authentication**.
