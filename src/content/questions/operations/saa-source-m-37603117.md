---
id: saa-source-m-37603117
title: "You have made a configuration change and would like to evaluate the impact of it on the performance of your application. Which AWS service should you use?"
domain: operations
services: ["CloudWatch", "CloudTrail", "AWS Config", "X-Ray"]
difficulty: medium
type: single
choices:
  - id: a
    text: "Amazon CloudWatch"
  - id: b
    text: "AWS CloudTrail"
correct: ["a"]
references: []
tags: ["monitoring", "operations", "imported"]
status: reviewed
lastReviewed: 2026-09-24
---

## Explanation

Amazon CloudWatch is a monitoring service that allows you to monitor your applications, respond to system-wide performance changes, optimize resource utilization, and get a unified view of operational health. It is used to monitor your applications' performance and metrics.

## Why the other options are incorrect

- **AWS CloudTrail:** AWS CloudTrail allows you to log, continuously monitor, and retain account activity related to actions across your AWS infrastructure. It provides the event history of your AWS account activity, audit API calls made through the AWS Management Console, AWS SDKs, AWS CLI. You can use CloudTrail to detect unusual activity in your AWS accounts.
