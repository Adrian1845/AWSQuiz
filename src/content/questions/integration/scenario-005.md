---
id: saa-scenario-005
title: "A Lambda consumer processes SQS messages. Messages that repeatedly fail must be isolated for investigation without blocking healthy messages. What should be configured?"
domain: integration
services: [An SQS dead-letter]
difficulty: medium
type: single
choices:
  - id: a
    text: A larger Lambda memory setting only
  - id: b
    text: An SQS dead-letter queue with an appropriate redrive policy
  - id: c
    text: An S3 lifecycle rule
  - id: d
    text: A VPC gateway endpoint
correct: [b]
references: [{ note: messaging }]
tags: [sqs,dlq,lambda,retries, scenario-based]
status: reviewed
lastReviewed: 2026-09-16
---

## Explanation

**An SQS dead-letter queue with an appropriate redrive policy** directly meets the stated technical and operational requirements. The alternatives do not provide the required behavior or are not designed for this use case.

