---
id: saa-source-m-37603003
title: "You want to migrate an on-premises MongoDB NoSQL database to AWS. You don't want to manage any database servers, so you want to use a managed NoSQL Serverless database, that provides you with high availability, durability, and reliability, and the capability to take your database global. Which database should you choose?"
domain: databases
services: ["RDS", "Aurora", "DynamoDB", "ElastiCache", "Redshift"]
difficulty: medium
type: single
choices:
  - id: a
    text: "Amazon RDS"
  - id: b
    text: "Amazon DynamoDB"
  - id: c
    text: "Amazon DocumentDB"
  - id: d
    text: "Amazon Aurora"
correct: ["b"]
references: []
tags: ["databases", "imported"]
status: reviewed
lastReviewed: 2026-09-24
---

## Explanation

Amazon DynamoDB is a key-value, document, NoSQL database.

## Why the other options are incorrect

- **Amazon RDS:** Amazon RDS is a relational, SQL-based database.
- **Amazon DocumentDB:** Amazon DocumentDB is a NoSQL databases and it might work perfectly here. But the questions states that the database must be Serverless and wants to take the database global. DocumentDB doesn't have a Serverless option and it doesn't have a global database feature.
- **Amazon Aurora:** Amazon Aurora is a relational, SQL-based database.
