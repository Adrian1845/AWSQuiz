---
id: saa-source-m-37587307
title: "You're getting errors while trying to create a new S3 bucket named \"dev\". You're using a new AWS Account with no S3 buckets created before. And you double-checked and found that you have the correct IAM permissions to create S3 Buckets. What is a possible cause for this?"
domain: storage
services: ["S3"]
difficulty: medium
type: single
choices:
  - id: a
    text: "Only AWS account root user can create S3 Buckets"
  - id: b
    text: "S3 bucket names must be globally unique and \"dev\" is already taken"
correct: ["b"]
references: []
tags: ["s3", "storage", "imported"]
status: reviewed
lastReviewed: 2026-09-17
---

## Explanation

The correct answer is **S3 bucket names must be globally unique and "dev" is already taken**.
