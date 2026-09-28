---
id: saa-source-m-37604063
title: "Which AWS service helps you protect your sensitive data stored in S3 buckets?"
domain: security
services: ["IAM", "KMS", "Cognito", "WAF", "Shield", "GuardDuty"]
difficulty: medium
type: single
choices:
  - id: a
    text: "Amazon GuardDuty"
  - id: b
    text: "Amazon Shield"
  - id: c
    text: "Amazon Macie"
  - id: d
    text: "AWS KMS"
correct: ["c"]
references: []
tags: ["security", "imported"]
status: reviewed
lastReviewed: 2026-09-24
---

## Explanation

Amazon Macie is a fully managed data security service that uses Machine Learning to discover and protect your sensitive data stored in S3 buckets. It automatically provides an inventory of S3 buckets including a list of unencrypted buckets, publicly accessible buckets, and buckets shared with other AWS accounts. It allows you to identify and alert you to sensitive data, such as Personally Identifiable Information (PII).
