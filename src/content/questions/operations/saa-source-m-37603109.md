---
id: saa-source-m-37603109
title: "How would you monitor your EC2 instance memory usage in CloudWatch?"
domain: operations
services: ["CloudWatch", "CloudTrail", "AWS Config", "X-Ray"]
difficulty: medium
type: single
choices:
  - id: a
    text: "Enable EC2 Detailed Monitoring"
  - id: b
    text: "By default, the EC2 instance pushes memory usage to CloudWatch"
  - id: c
    text: "Use the Unified CloudWatch Agent to push memory usage as a custom metric to CloudWatch"
correct: ["c"]
references: []
tags: ["monitoring", "operations", "imported"]
status: reviewed
lastReviewed: 2026-09-24
---

## Explanation

The correct answer is **Use the Unified CloudWatch Agent to push memory usage as a custom metric to CloudWatch**.
