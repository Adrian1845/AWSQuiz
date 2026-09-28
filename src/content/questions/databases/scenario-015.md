---
id: saa-scenario-015
title: "A DynamoDB application needs microsecond response times for repeated eventually consistent reads. Which service should be added?"
domain: databases
services: [DynamoDB Accelerator (DAX)]
difficulty: medium
type: single
choices:
  - id: a
    text: Amazon RDS Proxy
  - id: b
    text: Amazon ElastiCache for Memcached
  - id: c
    text: Amazon CloudFront
  - id: d
    text: DynamoDB Accelerator (DAX)
correct: [d]
references: [{ note: caching }]
tags: [dynamodb,dax,caching,performance, scenario-based]
status: reviewed
lastReviewed: 2026-09-16
---

## Explanation

**DynamoDB Accelerator (DAX)** directly meets the stated technical and operational requirements. The alternatives do not provide the required behavior or are not designed for this use case.

