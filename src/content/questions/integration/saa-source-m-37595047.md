---
id: saa-source-m-37595047
title: "You're running many micro-services applications on-premises and they communicate using a message broker that supports MQTT protocol. You're planning to migrate these applications to AWS without re-engineering the applications and modifying the code. Which AWS service allows you to get a managed message broker that supports the MQTT protocol?"
domain: integration
services: ["SQS", "SNS", "EventBridge", "Kinesis", "Amazon MQ"]
difficulty: medium
type: single
choices:
  - id: a
    text: "Amazon SQS"
  - id: b
    text: "Amazon SNS"
  - id: c
    text: "Amazon Kinesis"
  - id: d
    text: "Amazon MQ"
correct: ["d"]
references: []
tags: ["decoupling", "integration", "imported"]
status: reviewed
lastReviewed: 2026-09-24
---

## Explanation

Amazon MQ supports industry-standard APIs such as JMS and NMS, and protocols for messaging, including AMQP, STOMP, MQTT, and WebSocket.

## Why the other options are incorrect

- **Amazon SQS:** Amazon SQS does not support the MQTT protocol.
- **Amazon SNS:** Amazon SNS does not support the MQTT protocol.
- **Amazon Kinesis:** Amazon Kinesis does not support the MQTT protocol.
