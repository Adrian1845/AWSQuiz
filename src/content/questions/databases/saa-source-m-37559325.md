---
id: saa-source-m-37559325
title: "Your company has a production Node.js application that is using RDS MySQL 5.6 as its database. A new application programmed in Java will perform some heavy analytics workload to create a dashboard on a regular hourly basis. What is the most cost-effective solution you can implement to minimize disruption for the main application?"
domain: databases
services: ["RDS", "Aurora", "ElastiCache"]
difficulty: medium
type: single
choices:
  - id: a
    text: "Enable Multi-AZ for the RDS database and run the analytics workload on the standby database"
  - id: b
    text: "Create a Read Replica in a different AZ and run the analytics workload on the replica database"
  - id: c
    text: "Create a Read Replica in a different AZ and run the analytics workload on the source database"
correct: ["b"]
references: []
tags: ["rds", "aurora", "elasticache", "imported"]
status: reviewed
lastReviewed: 2026-09-17
---

## Explanation

The correct answer is **Create a Read Replica in a different AZ and run the analytics workload on the replica database**.
