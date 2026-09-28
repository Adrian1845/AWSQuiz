---
id: saa-source-m-37587329
title: "You have updated an S3 bucket policy to allow IAM users to read/write files in the S3 bucket, but one of the users complain that he can't perform a PutObject API call. What is a possible cause for this?"
domain: storage
services: ["S3"]
difficulty: medium
type: single
choices:
  - id: a
    text: "The S3 bucket policy must be wrong"
  - id: b
    text: "The user is lacking permissions"
  - id: c
    text: "The IAM user must have an explicit DENY in the attached IAM Policy"
  - id: d
    text: "You need to contact AWS Support to lift this limit"
correct: ["c"]
references: []
tags: ["s3", "storage", "imported"]
status: reviewed
lastReviewed: 2026-09-17
---

## Explanation

Explicit DENY in an IAM Policy will take precedence over an S3 bucket policy.

## Why the other options are incorrect

- **The user is lacking permissions:** Even if the user doesn't have permissions, in the question the S3 bucket is explicitly allowing the user and that's enough from a permission's perspective
