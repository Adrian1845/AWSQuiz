---
id: saa-source-m-52132002
title: "You suspect that some of your employees try to access files in an S3 bucket that they don't have access to. How can you verify this is indeed the case without them noticing?"
domain: security
services: ["S3", "IAM", "KMS"]
difficulty: medium
type: single
choices:
  - id: a
    text: "Enable S3 Access Logs and analyze them using Athena"
  - id: b
    text: "Restrict their IAM policies and look at CloudTail logs"
  - id: c
    text: "Use a bucket policy"
correct: ["a"]
references: []
tags: ["s3", "security", "imported"]
status: reviewed
lastReviewed: 2026-09-17
---

## Explanation

S3 Access Logs log all the requests made to S3 buckets and Amazon Athena can then be used to run serverless analytics on top of the log files.

## Why the other options are incorrect

- **Restrict their IAM policies and look at CloudTail logs:** This will be noticed by employees as they won't be able to access the files.
- **Use a bucket policy:** A bucket policy would prevent access to the user but they would notice it.
