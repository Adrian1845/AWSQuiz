---
id: saa-source-m-78489818
title: "You have a 25 GB file that you're trying to upload to S3 but you're getting errors. What is a possible solution for this?"
domain: storage
services: ["S3"]
difficulty: medium
type: single
choices:
  - id: a
    text: "The file size limit on S3 is 5 GB"
  - id: b
    text: "Update your bucket policy to allow the larger file"
  - id: c
    text: "Use Multi-Part upload when uploading files larger than 5GB"
  - id: d
    text: "Encrypt the file"
correct: ["c"]
references: []
tags: ["s3", "storage", "imported"]
status: reviewed
lastReviewed: 2026-09-17
---

## Explanation

Multi-Part Upload is recommended as soon as the file is over 100 MB.

## Why the other options are incorrect

- **The file size limit on S3 is 5 GB:** The file size limit on S3 is 5 TB.
