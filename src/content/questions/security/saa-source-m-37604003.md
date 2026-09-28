---
id: saa-source-m-37604003
title: "You have a secret value that you use for encryption purposes, and you want to store and track the values of this secret over time. Which AWS service should you use?"
domain: security
services: ["IAM", "KMS", "Cognito", "WAF", "Shield", "GuardDuty"]
difficulty: medium
type: single
choices:
  - id: a
    text: "AWS KMS Versioning feature"
  - id: b
    text: "SSM Parameter Store"
  - id: c
    text: "Amazon S3"
correct: ["b"]
references: []
tags: ["security", "imported"]
status: reviewed
lastReviewed: 2026-09-24
---

## Explanation

SSM Parameters Store can be used to store secrets and has built-in version tracking capability. Each time you edit the value of a parameter, SSM Parameter Store creates a new version of the parameter and retains the previous versions. You can view the details, including the values, of all versions in a parameter's history.

## Why the other options are incorrect

- **AWS KMS Versioning feature:** AWS KMS can rotate stored KMS keys, but it can not help audit the values of an encrypted value over time.
- **Amazon S3:** Amazon S3 has both versioning and encryption features, but it is not the best fit for storing secrets.
