---
id: saa-source-m-37604025
title: "You would like to externally maintain the configuration values of your main database, to be picked up at runtime by your application. What's the best place to store them to maintain control and version history?"
domain: security
services: ["IAM", "KMS", "Cognito", "WAF", "Shield", "GuardDuty"]
difficulty: medium
type: single
choices:
  - id: a
    text: "Amazon DynamoDB"
  - id: b
    text: "Amazon S3"
  - id: c
    text: "Amazon EBS"
  - id: d
    text: "SSM Parameter Store"
correct: ["d"]
references: []
tags: ["security", "imported"]
status: reviewed
lastReviewed: 2026-09-24
---

## Explanation

The correct answer is **SSM Parameter Store**.
