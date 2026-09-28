---
id: saa-security-001
title: "A security team needs to control S3 encryption keys, audit their use, and revoke key access when needed. Which S3 server-side encryption option should they choose?"
domain: security
services: [S3, KMS]
difficulty: easy
type: single
choices:
  - id: a
    text: SSE-S3
  - id: b
    text: SSE-KMS
  - id: c
    text: SSE-C
  - id: d
    text: Client-side encryption with no key management
correct: [b]
references: [{ note: s3, section: encryption }]
tags: [encryption, kms]
status: reviewed
lastReviewed: 2026-09-14
---

## Explanation

**SSE-KMS** uses AWS KMS keys, which support key policies, CloudTrail audit records, and the ability to control or revoke use of the encryption key.
