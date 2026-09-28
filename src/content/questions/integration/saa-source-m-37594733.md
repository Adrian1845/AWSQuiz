---
id: saa-source-m-37594733
title: "Which SQS Queue type allows your messages to be processed exactly once and in order?"
domain: integration
services: ["SQS", "SNS", "EventBridge", "Kinesis", "Amazon MQ"]
difficulty: medium
type: single
choices:
  - id: a
    text: "SQS Standard Queue"
  - id: b
    text: "SQS Dead Letter Queue"
  - id: c
    text: "SQS Delay Queue"
  - id: d
    text: "SQS FIFO Queue"
correct: ["d"]
references: []
tags: ["decoupling", "integration", "imported"]
status: reviewed
lastReviewed: 2026-09-24
---

## Explanation

SQS FIFO (First-In-First-Out) Queues have all the capabilities of the SQS Standard Queue, plus the following two features. First, The order in which messages are sent and received are strictly preserved and a message is delivered once and remains available until a consumer process and deletes it. Second, duplicated messages are not introduced into the queue.

## Why the other options are incorrect

- **SQS Standard Queue:** SQS Standard Queue doesn't have ordering capability and doesn't guarantee to process your messages exactly once.
- **SQS Dead Letter Queue:** SQS Dead Letter Queue is where other SQS queues (source queues) can send messages that can't be processed (consumed) successfully. It's useful for debugging as it allows you to isolate problematic messages so you can debug why their processing doesn't succeed.
- **SQS Delay Queue:** SQS Delay Queues is a period of time during which Amazon SQS keeps new SQS messages invisible to consumers. In SQS Delay Queues, a message is hidden when it is first added to the queue. (default: 0 mins, max.: 15 mins)
