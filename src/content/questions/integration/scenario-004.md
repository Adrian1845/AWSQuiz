---
id: saa-scenario-004
title: "An order event must trigger independent billing, fulfillment, and email processors. A slow email processor must not delay the other processors. Which architecture should be used?"
domain: integration
services: [Publish to an]
difficulty: hard
type: single
choices:
  - id: a
    text: Publish to an SNS topic with a separate SQS queue for each processor
  - id: b
    text: Send all consumers messages from one SQS queue
  - id: c
    text: Invoke all processors synchronously from one Lambda
  - id: d
    text: Use one FIFO queue for every processor
correct: [a]
references: [{ note: messaging }]
tags: [sns,sqs,fanout,decoupling, scenario-based]
status: reviewed
lastReviewed: 2026-09-16
---

## Explanation

**Publish to an SNS topic with a separate SQS queue for each processor** directly meets the stated technical and operational requirements. The alternatives do not provide the required behavior or are not designed for this use case.

