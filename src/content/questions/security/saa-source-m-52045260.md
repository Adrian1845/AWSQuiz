---
id: saa-source-m-52045260
title: "Your company does not trust AWS for the encryption process and wants it to happen on the application. You recommend them to use ...................."
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
correct: ["d"]
references: []
tags: ["s3", "security", "imported"]
status: reviewed
lastReviewed: 2026-09-17
---

## Explanation

With Client-Side Encryption, you have to do the encryption yourself and you have full control over the encryption keys. You perform the encryption yourself and send the encrypted data to AWS. AWS does not know your encryption keys and cannot decrypt your data.

## Why the other options are incorrect

- **SSE-S3:** With SSE-S3, the encryption happens in AWS and you the encryption keys managed by AWS. Encryption keys stored in AWS.
- **SSE-KMS:** With SSE-KMS, the encryption happens in AWS, and the encryption keys are managed by AWS but you have full control over the rotation policy of the encryption key. Encryption keys stored in AWS.
- **SSE-C:** With SSE-C, the encryption happens in AWS and you have full control over the encryption keys.
