---
id: saa-source-m-51343608
title: "A company is developing a Serverless application on AWS using Lambda, DynamoDB, and Cognito. A junior developer joined a few weeks ago and accidentally deleted one of the DynamoDB tables in the dev AWS account which contained important data. The CTO asks you to prevent this from happening again and there must be a notification system to monitor if there is an attempt to make such deletion actions for the DynamoDB tables. What would you do?"
domain: operations
services: ["CloudWatch", "CloudTrail", "AWS Config", "X-Ray"]
difficulty: medium
type: single
choices:
  - id: a
    text: "Assign developers to a certain IAM group which prevents deletion of DynamoDB tables. Configure EventBridge to capture any DeleteTable API calls through S3 and send a notification using KMS"
  - id: b
    text: "Assign developers to a certain IAM group which prevents deletion of DynamoDB tables. Configure EventBridge to capture any DeleteTable API calls through CloudTrail and send a notification using SNS"
  - id: c
    text: "Assign developers to a certain IAM group which prevents deletion of DynamoDB tables. Configure EventBridge to capture any DeleteTable API calls through CloudTrail and send a notification using KMS"
correct: ["b"]
references: []
tags: ["monitoring", "operations", "imported"]
status: reviewed
lastReviewed: 2026-09-24
---

## Explanation

The correct answer is **Assign developers to a certain IAM group which prevents deletion of DynamoDB tables. Configure EventBridge to capture any DeleteTable API calls through CloudTrail and send a notification using SNS**.
