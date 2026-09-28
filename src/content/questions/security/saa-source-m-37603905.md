---
id: saa-source-m-37603905
title: "You have a Lambda function used to process some data in the database. You would like to give your Lambda function access to the database password. Which of the following options is the most secure?"
domain: security
services: ["IAM", "KMS", "Cognito", "WAF", "Shield", "GuardDuty"]
difficulty: medium
type: single
choices:
  - id: a
    text: "Embed it in the code"
  - id: b
    text: "Have it as a plaintext environment variable"
  - id: c
    text: "Have it as an encrypted environment variable and decrypt it at runtime"
correct: ["c"]
references: []
tags: ["security", "imported"]
status: reviewed
lastReviewed: 2026-09-24
---

## Explanation

This is the most secure solution amongst these options.

## Why the other options are incorrect

- **Embed it in the code:** This is not secure.
- **Have it as a plaintext environment variable:** This is not secure.
