---
id: saa-source-m-52132022
title: "You are looking to provide temporary URLs to a growing list of federated users to allow them to perform a file upload on your S3 bucket to a specific location. What should you use?"
domain: security
services: ["S3", "IAM", "KMS"]
difficulty: medium
type: single
choices:
  - id: a
    text: "S3 CORS"
  - id: b
    text: "S3 Pre-Signed URL"
  - id: c
    text: "S3 Bucket Policies"
correct: ["b"]
references: []
tags: ["s3", "security", "imported"]
status: reviewed
lastReviewed: 2026-09-17
---

## Explanation

S3 Pre-Signed URLs are temporary URLs that you generate to grant time-limited access to some actions in your S3 bucket.

## Why the other options are incorrect

- **S3 CORS:** Cross-Origin Resource Sharing (CORS) defines a way for client web applications that are loaded in one domain to interact with resources in a different domain. To learn more about CORS, go here: https://docs.aws.amazon.com/AmazonS3/latest/dev/cors.html
- **S3 Bucket Policies:** S3 Bucket Policies cannot help in giving temporary access to a dynamic list of federated users.
