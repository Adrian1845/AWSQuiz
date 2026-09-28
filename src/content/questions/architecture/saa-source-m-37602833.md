---
id: saa-source-m-37602833
title: "You have configured a Lambda function to run each time an item is added to a DynamoDB table using DynamoDB Streams. The function is meant to insert messages into the SQS queue for further long processing jobs. Each time the Lambda function is invoked, it seems able to read from the DynamoDB Stream but it isn't able to insert the messages into the SQS queue. What do you think the problem is?"
domain: architecture
services: ["Lambda", "API Gateway", "Kinesis", "EventBridge"]
difficulty: medium
type: single
choices:
  - id: a
    text: "Lambda can't be used to insert messages into the SQS queue, use an EC2 instance instead"
  - id: b
    text: "The Lambda Execution IAM Role is missing permissions"
  - id: c
    text: "The Lambda security group must allow outbound access to SQS"
  - id: d
    text: "The SQS security group must be edited to allow AWS Lambda"
correct: ["b"]
references: []
tags: ["serverless", "architecture", "imported"]
status: reviewed
lastReviewed: 2026-09-24
---

## Explanation

The correct answer is **The Lambda Execution IAM Role is missing permissions**.

## Why the other options are incorrect

- **Lambda can't be used to insert messages into the SQS queue, use an EC2 instance instead:** AWS Lambda is a perfect fit with SQS.
- **The Lambda security group must allow outbound access to SQS:** Security Groups can not point to SQS queues.
- **The SQS security group must be edited to allow AWS Lambda:** Security Groups can not be attached to SQS queues.
