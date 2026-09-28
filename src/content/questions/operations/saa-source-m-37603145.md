---
id: saa-source-m-37603145
title: "You are running a website on a fleet of EC2 instances with OS that has a known vulnerability on port 84. You want to continuously monitor your EC2 instances if they have port 84 exposed. How should you do this?"
domain: operations
services: ["CloudWatch", "CloudTrail", "AWS Config", "X-Ray"]
difficulty: medium
type: single
choices:
  - id: a
    text: "Setup CloudWatch Metrics"
  - id: b
    text: "Setup CloudTrail Trails"
  - id: c
    text: "Setup Config Rules"
  - id: d
    text: "Schedule a CloudWatch Event to trigger a Lambda function to scan your EC2 instances"
correct: ["c"]
references: []
tags: ["monitoring", "operations", "imported"]
status: reviewed
lastReviewed: 2026-09-24
---

## Explanation

The correct answer is **Setup Config Rules**.
