---
id: saa-original-016
title: "A gaming company wants to decouple producers and consumers with at-least-once message delivery with minimal operational overhead. Which option is appropriate?"
domain: integration
services: [Amazon SQS]
difficulty: hard
type: single
choices:
  - id: a
    text: Amazon SNS
  - id: b
    text: Amazon EventBridge
  - id: c
    text: Amazon Kinesis Data Streams
  - id: d
    text: Amazon SQS Standard
correct: [d]
references: [{ note: messaging }]
tags: [messaging,decoupling, practice-bank]
status: reviewed
lastReviewed: 2026-09-15
---

## Explanation

**Amazon SQS Standard** is the best fit because it is designed to decouple producers and consumers with at-least-once message delivery. The other options do not directly satisfy the stated requirement.
