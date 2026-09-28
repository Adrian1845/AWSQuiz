---
id: saa-scenario-008
title: "A critical Lambda API must always retain capacity during traffic spikes, while a noncritical function must not consume all account concurrency. Which Lambda feature should be used?"
domain: compute
services: [Reserved concurrency on]
difficulty: medium
type: single
choices:
  - id: a
    text: Reserved concurrency on each function
  - id: b
    text: A larger deployment package
  - id: c
    text: An EC2 placement group
  - id: d
    text: An S3 lifecycle rule
correct: [a]
references: [{ note: lambda-and-api-gateway }]
tags: [lambda,reserved-concurrency,serverless, scenario-based]
status: reviewed
lastReviewed: 2026-09-16
---

## Explanation

**Reserved concurrency on each function** directly meets the stated technical and operational requirements. The alternatives do not provide the required behavior or are not designed for this use case.

