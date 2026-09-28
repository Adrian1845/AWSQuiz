---
id: saa-source-m-37594741
title: "You have 3 different applications that you'd like to send them the same message. All 3 applications are using SQS. What is the best approach would you choose?"
domain: integration
services: ["SQS", "SNS", "EventBridge", "Kinesis", "Amazon MQ"]
difficulty: medium
type: single
choices:
  - id: a
    text: "Use SQS Replication Feature"
  - id: b
    text: "Use SNS + SQS Fan Out Pattern"
  - id: c
    text: "Send messages individually to 3 SQS queues"
correct: ["b"]
references: []
tags: ["decoupling", "integration", "imported"]
status: reviewed
lastReviewed: 2026-09-24
---

## Explanation

This is a common pattern where only one message is sent to the SNS topic and then "fan-out" to multiple SQS queues. This approach has the following features: it's fully decoupled, no data loss, and you have the ability to add more SQS queues (more applications) over time.

## Why the other options are incorrect

- **Use SQS Replication Feature:** There's no such feature.
- **Send messages individually to 3 SQS queues:** This is not a common pattern and doesn't scale well.
