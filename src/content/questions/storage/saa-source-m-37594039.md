---
id: saa-source-m-37594039
title: "You have an S3 bucket that has S3 Versioning enabled. This S3 bucket has a lot of objects, and you would like to remove old object versions to reduce costs. What's the best approach to automate the deletion of these old object versions?"
domain: storage
services: ["S3"]
difficulty: medium
type: single
choices:
  - id: a
    text: "S3 Lifecycle Rules - Transition Actions"
  - id: b
    text: "S3 Lifecycle Rules - Expiration Actions"
  - id: c
    text: "S3 Access Logs"
correct: ["b"]
references: []
tags: ["s3", "storage", "imported"]
status: reviewed
lastReviewed: 2026-09-17
---

## Explanation

The correct answer is **S3 Lifecycle Rules - Expiration Actions**.
