---
id: saa-source-m-37595695
title: "You have developed a mobile application that uses DynamoDB as its datastore. You want to automate sending welcome emails to new users after they sign up. What is the most efficient way to achieve this?"
domain: compute
services: ["Lambda", "API Gateway", "Step Functions"]
difficulty: medium
type: single
choices:
  - id: a
    text: "Schedule a Lambda function to run every minute using CloudWatch Events, scan the entire table looking for new users"
  - id: b
    text: "Enable SNS and DynamoDB integration"
  - id: c
    text: "Enable DynamoDB Streams and configure it to invoke a Lambda function to send emails"
correct: ["c"]
references: []
tags: ["serverless", "compute", "imported"]
status: reviewed
lastReviewed: 2026-09-24
---

## Explanation

DynamoDB Streams allows you to capture a time-ordered sequence of item-level modifications in a DynamoDB table. It's integrated with AWS Lambda so that you create triggers that automatically respond to events in real-time.

## Why the other options are incorrect

- **Schedule a Lambda function to run every minute using CloudWatch Events, scan the entire table looking for new users:** This would work but it wouldn't be a scalable, cheap, or efficient solution.
- **Enable SNS and DynamoDB integration:** There's no such feature.
