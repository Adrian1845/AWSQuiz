---
id: saa-scenario-006
title: "A payment workflow must preserve order for each customer and prevent duplicate processing of the same request. Which messaging service is appropriate?"
domain: integration
services: [Amazon SQS FIFO]
difficulty: medium
type: single
choices:
  - id: a
    text: Amazon SQS Standard
  - id: b
    text: Amazon SNS
  - id: c
    text: Amazon SQS FIFO with message group IDs and deduplication
  - id: d
    text: Amazon EventBridge
correct: [c]
references: [{ note: messaging }]
tags: [sqs,fifo,ordering,deduplication, scenario-based]
status: reviewed
lastReviewed: 2026-09-16
---

## Explanation

**Amazon SQS FIFO with message group IDs and deduplication** directly meets the stated technical and operational requirements. The alternatives do not provide the required behavior or are not designed for this use case.

