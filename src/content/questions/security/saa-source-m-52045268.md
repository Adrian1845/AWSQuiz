---
id: saa-source-m-52045268
title: "You have a website that loads files from an S3 bucket. When you try the URL of the files directly in your Chrome browser it works, but when a website with a different domain tries to load these files it doesn't. What's the problem?"
domain: security
services: ["S3", "IAM", "KMS"]
difficulty: medium
type: single
choices:
  - id: a
    text: "The Bucket policy is wrong"
  - id: b
    text: "The IAM policy is wrong"
  - id: c
    text: "CORS is wrong"
  - id: d
    text: "Encryption is wrong"
correct: ["c"]
references: []
tags: ["s3", "security", "imported"]
status: reviewed
lastReviewed: 2026-09-17
---

## Explanation

Cross-Origin Resource Sharing (CORS) defines a way for client web applications that are loaded in one domain to interact with resources in a different domain. To learn more about CORS, go here: https://docs.aws.amazon.com/AmazonS3/latest/dev/cors.html

## Why the other options are incorrect

- **The Bucket policy is wrong:** If the S3 bucket policy is wrong, the files won't load in either case.
- **The IAM policy is wrong:** If the IAM policy was wrong, the files won't load in either case.
- **Encryption is wrong:** If the encryption was wrong, the files won't load in either case.
