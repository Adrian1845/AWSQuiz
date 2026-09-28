---
id: saa-source-m-52045240
title: "Your client wants to make sure that file encryption is happening in S3, but he wants to fully manage the encryption keys and never store them in AWS. You recommend him to use ............................"
domain: security
services: ["S3", "IAM", "KMS"]
difficulty: medium
type: single
choices:
  - id: a
    text: "SSE-S3"
  - id: b
    text: "SSE-KMS"
  - id: c
    text: "SSE-C"
  - id: d
    text: "Client-Side Encryption"
correct: ["c"]
references: []
tags: ["s3", "security", "imported"]
status: reviewed
lastReviewed: 2026-09-17
---

## Explanation

With SSE-C, the encryption happens in AWS and you have full control over the encryption keys.

## Why the other options are incorrect

- **SSE-S3:** With SSE-S3, the encryption happens in AWS and you the encryption keys managed by AWS. Encryption keys stored in AWS.
- **SSE-KMS:** With SSE-KMS, the encryption happens in AWS, and the encryption keys are managed by AWS but you have full control over the rotation policy of the encryption key. Encryption keys stored in AWS.
- **Client-Side Encryption:** With Client-Side Encryption, you have to do the encryption yourself and you have full control over the encryption keys.
