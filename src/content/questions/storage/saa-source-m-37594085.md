---
id: saa-source-m-37594085
title: "You have a large dataset stored on-premises that you want to upload to the S3 bucket. The dataset is divided into 10 GB files. You have good bandwidth but your Internet connection isn't stable. What is the best way to upload this dataset to S3 and ensure that the process is fast and avoid any problems with the Internet connection?"
domain: storage
services: ["S3"]
difficulty: medium
type: single
choices:
  - id: a
    text: "Use Multi-part Upload Only"
  - id: b
    text: "Use S3 Select & Use S3 Transfer Acceleration"
  - id: c
    text: "Use S3 Multi-part Upload & S3 Transfer Acceleration"
correct: ["c"]
references: []
tags: ["s3", "storage", "imported"]
status: reviewed
lastReviewed: 2026-09-17
---

## Explanation

The correct answer is **Use S3 Multi-part Upload & S3 Transfer Acceleration**.
