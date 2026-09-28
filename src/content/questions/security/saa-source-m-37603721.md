---
id: saa-source-m-37603721
title: "You need to create KMS Keys in AWS KMS before you are able to use the encryption features for EBS, S3, RDS ..."
domain: security
services: ["IAM", "KMS", "Cognito", "WAF", "Shield", "GuardDuty"]
difficulty: medium
type: single
choices:
  - id: a
    text: "True"
  - id: b
    text: "False"
correct: ["b"]
references: []
tags: ["security", "imported"]
status: reviewed
lastReviewed: 2026-09-24
---

## Explanation

You can use the AWS Managed Service keys in KMS, therefore we don't need to create our own KMS keys.

## Why the other options are incorrect

- **True:** You could also create your own keys for AWS to do the encryption, but it's not mandatory.
