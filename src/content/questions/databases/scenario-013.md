---
id: saa-scenario-013
title: "A serverless application opens thousands of short-lived database connections during peak traffic, exhausting Aurora connection limits. Which solution minimizes application changes?"
domain: databases
services: [Use Amazon RDS]
difficulty: hard
type: single
choices:
  - id: a
    text: Add an Aurora read replica only
  - id: b
    text: Use Amazon RDS Proxy
  - id: c
    text: Use Amazon CloudFront
  - id: d
    text: Use AWS Direct Connect
correct: [b]
references: [{ note: rds-proxy-and-connectivity }]
tags: [rds-proxy,lambda,connection-pooling,aurora, scenario-based]
status: reviewed
lastReviewed: 2026-09-16
---

## Explanation

**Use Amazon RDS Proxy** directly meets the stated technical and operational requirements. The alternatives do not provide the required behavior or are not designed for this use case.

