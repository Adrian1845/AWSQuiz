---
id: saa-original-008
title: "A logistics company is modernizing a workload and needs to encrypt S3 objects with key-use auditing and access control. Which AWS offering fits?"
domain: security
services: [KMS]
difficulty: medium
type: single
choices:
  - id: a
    text: SSE-S3
  - id: b
    text: S3 Object Lock
  - id: c
    text: An S3 ACL
  - id: d
    text: SSE-KMS
correct: [d]
references: [{ note: encryption-and-secrets }]
tags: [encryption,kms, practice-bank]
status: reviewed
lastReviewed: 2026-09-15
---

## Explanation

**SSE-KMS** is the best fit because it is designed to encrypt S3 objects with key-use auditing and access control. The other options do not directly satisfy the stated requirement.
