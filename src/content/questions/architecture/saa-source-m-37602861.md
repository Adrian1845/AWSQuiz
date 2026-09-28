---
id: saa-source-m-37602861
title: "An AWS service allows you to capture gigabytes of data per second in real-time and deliver these data to multiple consuming applications, with a replay feature."
domain: architecture
services: ["Lambda", "API Gateway", "Kinesis", "EventBridge"]
difficulty: medium
type: single
choices:
  - id: a
    text: "Kinesis Data Streams"
  - id: b
    text: "Amazon S3"
  - id: c
    text: "Amazon MQ"
correct: ["a"]
references: []
tags: ["serverless", "architecture", "imported"]
status: reviewed
lastReviewed: 2026-09-24
---

## Explanation

Amazon Kinesis Data Streams (KDS) is a massively scalable and durable real-time data streaming service. It can continuously capture gigabytes of data per second from hundreds of sources such as website clickstreams, database event streams, financial transactions, social media feeds, IT logs, and location-tracking events.

## Why the other options are incorrect

- **Amazon S3:** Amazon S3 is an object storage service and does not provide replay features.
- **Amazon MQ:** Amazon MQ is a managed message broker service for Apache ActiveMQ and RabbitMQ that makes it easy to set up and operate message brokers on AWS. It's a replacement for Amazon SQS in case you need to support other protocols such as MQTT.
