---
id: saa-source-m-37594871
title: "You are running an application that produces a large amount of real-time data that you want to load into S3 and Redshift. Also, these data need to be transformed before being delivered to their destination. What is the best architecture would you choose?"
domain: integration
services: ["SQS", "SNS", "EventBridge", "Kinesis", "Amazon MQ"]
difficulty: medium
type: single
choices:
  - id: a
    text: "SQS + AWS Lambda"
  - id: b
    text: "SNS + HTTP Endpoint"
  - id: c
    text: "Kinesis Data Streams + Kinesis Data Firehose"
correct: ["c"]
references: []
tags: ["decoupling", "integration", "imported"]
status: reviewed
lastReviewed: 2026-09-24
---

## Explanation

This is a perfect combo of technology for loading data near real-time data into S3 and Redshift. Kinesis Data Firehose supports custom data transformations using AWS Lambda.

## Why the other options are incorrect

- **SQS + AWS Lambda:** This doesn't have a direct integration with S3 or Redshift.
- **SNS + HTTP Endpoint:** This doesn't have a direct integration with S3 or Redshift.
