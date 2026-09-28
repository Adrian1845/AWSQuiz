---
id: saa-source-m-37594953
title: "Which of the following is NOT a supported subscriber for AWS SNS?"
domain: integration
services: ["SQS", "SNS", "EventBridge", "Kinesis", "Amazon MQ"]
difficulty: medium
type: single
choices:
  - id: a
    text: "Amazon Kinesis Data Streams"
  - id: b
    text: "Amazon SQS"
  - id: c
    text: "HTTP(S) Endpoint"
  - id: d
    text: "AWS Lambda"
correct: ["a"]
references: []
tags: ["decoupling", "integration", "imported"]
status: reviewed
lastReviewed: 2026-09-24
---

## Explanation

Note: Kinesis Data Firehose is now supported, but not Kinesis Data Streams.
