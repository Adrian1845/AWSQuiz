---
id: saa-scenario-007
title: "A SaaS application publishes events with detail fields. Different teams need rules that route events by content to multiple AWS targets. Which service should be selected?"
domain: integration
services: [Amazon EventBridge]
difficulty: hard
type: single
choices:
  - id: a
    text: Amazon SQS FIFO
  - id: b
    text: Amazon SNS without filtering
  - id: c
    text: AWS Step Functions
  - id: d
    text: Amazon EventBridge
correct: [d]
references: [{ note: messaging }]
tags: [eventbridge,event-routing,serverless, scenario-based]
status: reviewed
lastReviewed: 2026-09-16
---

## Explanation

**Amazon EventBridge** directly meets the stated technical and operational requirements. The alternatives do not provide the required behavior or are not designed for this use case.

