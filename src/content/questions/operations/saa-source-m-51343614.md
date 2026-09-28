---
id: saa-source-m-51343614
title: "A company has a running Serverless application on AWS which uses EventBridge as an inter-communication channel between different services within the application. There is a requirement to use the events in the prod environment in the dev environment to make some tests. The tests will be done every 6 months, so the events need to be stored and used later on. What is the most efficient and cost-effective way to store EventBridge events and use them later?"
domain: operations
services: ["CloudWatch", "CloudTrail", "AWS Config", "X-Ray"]
difficulty: medium
type: single
choices:
  - id: a
    text: "Use EventBridge Archive and Replay feature"
  - id: b
    text: "Create a Lambda function to store the EventBridge events in an S3 bucket for later usage"
  - id: c
    text: "Configure EventBridge to store events in a DynamoDB table"
correct: ["a"]
references: []
tags: ["monitoring", "operations", "imported"]
status: reviewed
lastReviewed: 2026-09-24
---

## Explanation

The correct answer is **Use EventBridge Archive and Replay feature**.
