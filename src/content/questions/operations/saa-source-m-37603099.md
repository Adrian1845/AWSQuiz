---
id: saa-source-m-37603099
title: "You have an RDS DB instance that's configured to push its database logs to CloudWatch. You want to create a CloudWatch alarm if there's an Error found in the logs. How would you do that?"
domain: operations
services: ["CloudWatch", "CloudTrail", "AWS Config", "X-Ray"]
difficulty: medium
type: single
choices:
  - id: a
    text: "Create a scheduled CloudWatch Event that triggers an AWS Lambda every 1 hour, scans the logs, and notify you through SNS topic"
  - id: b
    text: "Create a CloudWatch Logs Metric Filter that filter the logs for the keyword Error, then create a CloudWatch Alarm based on that Metric Filter"
  - id: c
    text: "Create an AWS Config Rule that monitors Error in your database logs and notify you through SNS topic"
correct: ["b"]
references: []
tags: ["monitoring", "operations", "imported"]
status: reviewed
lastReviewed: 2026-09-24
---

## Explanation

The correct answer is **Create a CloudWatch Logs Metric Filter that filter the logs for the keyword Error, then create a CloudWatch Alarm based on that Metric Filter**.
