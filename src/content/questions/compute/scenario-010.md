---
id: saa-scenario-010
title: "A genomics workload consists of millions of interruptible container jobs that can be retried. The company wants queue-aware scheduling and the lowest compute cost. Which service should be used?"
domain: compute
services: [AWS Batch using]
difficulty: hard
type: single
choices:
  - id: a
    text: AWS Lambda
  - id: b
    text: AWS App Runner
  - id: c
    text: AWS Batch using Spot capacity
  - id: d
    text: Amazon API Gateway
correct: [c]
references: [{ note: managed-compute }]
tags: [batch,spot,compute,cost-optimization, scenario-based]
status: reviewed
lastReviewed: 2026-09-16
---

## Explanation

**AWS Batch using Spot capacity** directly meets the stated technical and operational requirements. The alternatives do not provide the required behavior or are not designed for this use case.

