---
id: saa-source-m-37594577
title: "You have an SQS Queue where each consumer polls 10 messages at a time and finishes processing them in 1 minute. After a while, you noticed that the same SQS messages are received by different consumers resulting in your messages being processed more than once. What should you do to resolve this issue?"
domain: integration
services: ["SQS", "SNS", "EventBridge", "Kinesis", "Amazon MQ"]
difficulty: medium
type: single
choices:
  - id: a
    text: "Enable Long Polling"
  - id: b
    text: "Add DelaySeconds parameter to the messages when being produced"
  - id: c
    text: "Increase the Visibility Timeout"
  - id: d
    text: "Decrease the Visibility Timeout"
correct: ["c"]
references: []
tags: ["decoupling", "integration", "imported"]
status: reviewed
lastReviewed: 2026-09-24
---

## Explanation

SQS Visibility Timeout is a period of time during which Amazon SQS prevents other consumers from receiving and processing the message again. In Visibility Timeout, a message is hidden only after it is consumed from the queue. Increasing the Visibility Timeout gives more time to the consumer to process the message and prevent duplicate reading of the message. (default: 30 sec., min.: 0 sec., max.: 12 hours)

## Why the other options are incorrect

- **Enable Long Polling:** When SQS Long Polling is enabled, Amazon SQS reducing the number of empty responses when there are no messages available to return and eliminating false empty responses (when SQS messages are available but aren't included in a response).
- **Add DelaySeconds parameter to the messages when being produced:** SQS Delay Queues is a period of time during which Amazon SQS keeps new SQS messages invisible to consumers. In SQS Delay Queues, a message is hidden when it is first added to the queue. (default: 0 mins, max.: 15 mins)
