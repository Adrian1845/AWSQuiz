---
id: saa-source-m-52132040
title: "You have enabled versioning and want to be extra careful when it comes to deleting files on an S3 bucket. What should you enable to prevent accidental permanent deletions?"
domain: security
services: ["S3", "IAM", "KMS"]
difficulty: medium
type: single
choices:
  - id: a
    text: "Use a bucket policy"
  - id: b
    text: "Enable MFA Delete"
  - id: c
    text: "Encrypt the files"
  - id: d
    text: "Disable versioning"
correct: ["b"]
references: []
tags: ["s3", "security", "imported"]
status: reviewed
lastReviewed: 2026-09-17
---

## Explanation

MFA Delete forces users to use MFA codes before deleting S3 objects. It's an extra level of security to prevent accidental deletions.

## Why the other options are incorrect

- **Use a bucket policy:** The bucket policy would prevent deletes altogether.
