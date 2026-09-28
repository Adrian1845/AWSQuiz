---
id: saa-source-m-37602995
title: "Which AWS service provides you with caching capability that is compatible with Redis API?"
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
    text: "Amazon OpenSearch"
  - id: d
    text: "Amazon ElastiCache"
correct: ["d"]
references: []
tags: ["databases", "imported"]
status: reviewed
lastReviewed: 2026-09-24
---

## Explanation

Amazon ElastiCache is a fully managed in-memory data store, compatible with Redis or Memcached.

## Why the other options are incorrect

- **Amazon RDS:** Amazon RDS does not have caching capability and it is based on JDBC and not compatible with Redis API.
- **Amazon DynamoDB:** Amazon DynamoDB can be used as a substitute for Redis but it does not support Redis API.
- **Amazon OpenSearch:** Amazon OpenSearch helps you in indexing and searching through your data. It leverages HTTP for client interactions.
