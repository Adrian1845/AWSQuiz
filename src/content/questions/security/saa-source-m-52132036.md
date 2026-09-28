---
id: saa-source-m-52132036
title: "You would like all your files in an S3 bucket to be encrypted by default. What is the optimal way of achieving this?"
domain: security
services: ["S3", "IAM", "KMS"]
difficulty: medium
type: single
choices:
  - id: a
    text: "Use a bucket policy that forces HTTPS connections"
  - id: b
    text: "Do nothing, Amazon S3 automatically encrypt new objects using Server-Side Encryption with S3-Managed Keys (SSE-S3)"
  - id: c
    text: "Enable Versioning"
correct: ["b"]
references: []
tags: ["s3", "security", "imported"]
status: reviewed
lastReviewed: 2026-09-17
---

## Explanation

The correct answer is **Do nothing, Amazon S3 automatically encrypt new objects using Server-Side Encryption with S3-Managed Keys (SSE-S3)**.

## Why the other options are incorrect

- **Use a bucket policy that forces HTTPS connections:** This will force in-flight encryption but not at-rest encryption.
