---
id: saa-source-m-51343786
title: "You have an S3 bucket that is encrypted with SSE-KMS. You have been tasked to replicate the objects to a target bucket in the same AWS region but with a different KMS Key. You have configured the S3 replication, the target bucket, and the target KMS key and it is still not working. What is missing to make the S3 replication work?"
domain: security
services: ["IAM", "KMS", "Cognito", "WAF", "Shield", "GuardDuty"]
difficulty: medium
type: single
choices:
  - id: a
    text: "This is not a supported feature"
  - id: b
    text: "You have to raise a support ticket for AWS to start this replication process for you"
  - id: c
    text: "You have to configure permissions for both Source KMS Key kms:Decrypt and Target KMS Key kms:Encrypt to be used by the S3 Replication Service"
  - id: d
    text: "The source KMS Key and the target KMS key must be the same"
correct: ["c"]
references: []
tags: ["security", "imported"]
status: reviewed
lastReviewed: 2026-09-24
---

## Explanation

The correct answer is **You have to configure permissions for both Source KMS Key kms:Decrypt and Target KMS Key kms:Encrypt to be used by the S3 Replication Service**.
