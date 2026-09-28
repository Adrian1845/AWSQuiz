---
id: saa-source-m-37559585
title: "An application running in production is using an Aurora Cluster as its database. Your development team would like to run a version of the application in a scaled-down application with the ability to perform some heavy workload on a need-basis. Most of the time, the application will be unused. Your CIO has tasked you with helping the team to achieve this while minimizing costs. What do you suggest?"
domain: databases
services: ["RDS", "Aurora", "ElastiCache"]
difficulty: medium
type: single
choices:
  - id: a
    text: "Use an Aurora Global Database"
  - id: b
    text: "Use an RDS database"
  - id: c
    text: "Use Aurora Serverless"
  - id: d
    text: "Run Aurora on EC2, and write a script to shut down the EC2 instance at night"
correct: ["c"]
references: []
tags: ["rds", "aurora", "elasticache", "imported"]
status: reviewed
lastReviewed: 2026-09-17
---

## Explanation

The correct answer is **Use Aurora Serverless**.
