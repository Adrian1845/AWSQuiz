---
id: saa-source-m-37602789
title: "A startup company plans to run its application on AWS. As a solutions architect, the company hired you to design and implement a fully Serverless REST API. Which technology stack do you recommend?"
domain: architecture
services: ["Lambda", "API Gateway", "Kinesis", "EventBridge"]
difficulty: medium
type: single
choices:
  - id: a
    text: "API Gateway + AWS Lambda"
  - id: b
    text: "Application Load Balancer + EC2"
  - id: c
    text: "Elastic Container Service (ECS) + Elastic Block Store (EBS)"
  - id: d
    text: "Amazon CloudFront + S3"
correct: ["a"]
references: []
tags: ["serverless", "architecture", "imported"]
status: reviewed
lastReviewed: 2026-09-24
---

## Explanation

This is fully serverless.

## Why the other options are incorrect

- **Application Load Balancer + EC2:** EC2 is not serverless.
- **Elastic Container Service (ECS) + Elastic Block Store (EBS):** Both ECS and EBS are not serverless.
- **Amazon CloudFront + S3:** This is serverless but it won't help as you want to create an API. This combination allows you to distribute the static part of your application globally.
