---
id: saa-source-m-52045248
title: "A company you're working for wants their data stored in S3 to be encrypted. They don't mind the encryption keys stored and managed by AWS, but they want to maintain control over the rotation policy of the encryption keys. You recommend them to use ...................."
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
correct: ["b"]
references: []
tags: ["s3", "security", "imported"]
status: reviewed
lastReviewed: 2026-09-17
---

## Explanation

With SSE-KMS, the encryption happens in AWS, and the encryption keys are managed by AWS but you have full control over the rotation policy of the encryption key. Encryption keys stored in AWS.

## Why the other options are incorrect

- **SSE-S3:** With SSE-S3, the encryption happens in AWS and you don't manage the encryption keys. Encryption keys stored in AWS.
- **SSE-C:** With SSE-C, the encryption happens in AWS and you have full control over the encryption keys. You could define a rotation policy but this is against the question requirements (encryption keys must be stored and managed by AWS).
- **Client-Side Encryption:** With Client-Side Encryption, you have to do the encryption yourself and you have full control over the encryption keys. You could define a rotation policy but this is against the question requirements (encryption keys must be stored and managed by AWS).
