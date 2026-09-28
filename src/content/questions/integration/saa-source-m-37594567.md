---
id: saa-source-m-37594567
title: "You have an e-commerce website and you are preparing for Black Friday which is the biggest sale of the year. You expect that your traffic will increase by 100x. Your website already using an SQS Standard Queue, and you're running a fleet of EC2 instances in an Auto Scaling Group to consume SQS messages. What should you do to prepare your SQS Queue?"
domain: integration
services: ["SQS", "SNS", "EventBridge", "Kinesis", "Amazon MQ"]
difficulty: medium
type: single
choices:
  - id: a
    text: "Contact AWS Support to pre-warm your SQS Standard Queue"
  - id: b
    text: "Enable Auto Scaling in your SQS queue"
  - id: c
    text: "Increase the capacity of the SQS queue"
  - id: d
    text: "Do nothing, SQS scales automatically"
correct: ["d"]
references: []
tags: ["decoupling", "integration", "imported"]
status: reviewed
lastReviewed: 2026-09-24
---

## Explanation

The correct answer is **Do nothing, SQS scales automatically**.
