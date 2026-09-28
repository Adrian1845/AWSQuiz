---
id: saa-source-m-37603125
title: "Someone has terminated an EC2 instance in your AWS account last week, which was hosting a critical database that contains sensitive data. Which AWS service helps you find who did that and when?"
domain: operations
services: ["CloudWatch", "CloudTrail", "AWS Config", "X-Ray"]
difficulty: medium
type: single
choices:
  - id: a
    text: "CloudWatch Metrics"
  - id: b
    text: "CloudWatch Alarms"
  - id: c
    text: "CloudWatch Events"
  - id: d
    text: "AWS CloudTrail"
correct: ["d"]
references: []
tags: ["monitoring", "operations", "imported"]
status: reviewed
lastReviewed: 2026-09-24
---

## Explanation

AWS CloudTrail allows you to log, continuously monitor, and retain account activity related to actions across your AWS infrastructure. It provides the event history of your AWS account activity, audit API calls made through the AWS Management Console, AWS SDKs, AWS CLI. So, the EC2 instance termination API call will appear here. You can use CloudTrail to detect unusual activity in your AWS accounts.

## Why the other options are incorrect

- **CloudWatch Metrics:** CloudWatch Metrics are data about the performance of your systems, it won't indicate "who" did what.
- **CloudWatch Alarms:** CloudWatch Alarms allows you to trigger notifications/actions based on any CloudWatch Metrics or other CloudWatch Alarms, it won't indicate "who" did what.
- **CloudWatch Events:** CloudWatch Events delivers a stream of system events that describe changes in your AWS resources, it won't indicate "who" did what.
