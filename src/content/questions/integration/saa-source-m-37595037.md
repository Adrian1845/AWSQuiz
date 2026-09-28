---
id: saa-source-m-37595037
title: "Which AWS service helps you when you want to send email notifications to your users?"
domain: integration
services: ["SQS", "SNS", "EventBridge", "Kinesis", "Amazon MQ"]
difficulty: medium
type: single
choices:
  - id: a
    text: "Amazon SQS with AWS Lambda"
  - id: b
    text: "Amazon SNS"
  - id: c
    text: "Amazon Kinesis"
correct: ["b"]
references: []
tags: ["decoupling", "integration", "imported"]
status: reviewed
lastReviewed: 2026-09-24
---

## Explanation

The correct answer is **Amazon SNS**.

## Why the other options are incorrect

- **Amazon SQS with AWS Lambda:** You would be re-implementing a feature from SNS.
- **Amazon Kinesis:** Amazon Kinesis on its own can not send emails. You would need to chain it with a consumer, and in the end, you would re-create something like SNS.
