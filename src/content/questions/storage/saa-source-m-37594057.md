---
id: saa-source-m-37594057
title: "While you're uploading large files to an S3 bucket using Multi-part Upload, there are a lot of unfinished parts stored in the S3 bucket due to network issues. You are not using these unfinished parts and they cost you money. What is the best approach to remove these unfinished parts?"
domain: storage
services: ["S3"]
difficulty: medium
type: single
choices:
  - id: a
    text: "Use AWS Lambda to loop on each old/unfinished part and delete them"
  - id: b
    text: "Request AWS Support to help you delete old/unfinished parts"
  - id: c
    text: "Use an S3 Lifecycle Policy to automate old/unfinished parts deletion"
correct: ["c"]
references: []
tags: ["s3", "storage", "imported"]
status: reviewed
lastReviewed: 2026-09-17
---

## Explanation

The correct answer is **Use an S3 Lifecycle Policy to automate old/unfinished parts deletion**.

## Why the other options are incorrect

- **Use AWS Lambda to loop on each old/unfinished part and delete them:** This would work but it includes a lot of manual work and will cost you more money.
