---
id: saa-source-m-52132012
title: "You have 3 S3 buckets. One source bucket A, and two destination buckets B and C in different AWS Regions. You want to replicate objects from bucket A to both bucket B and C. How would you achieve this?"
domain: storage
services: ["S3"]
difficulty: medium
type: single
choices:
  - id: a
    text: "Configure replication from bucket A to bucket B, then from bucket A to bucket C"
  - id: b
    text: "Configure replication from bucket A to bucket B, then from bucket B to bucket C"
  - id: c
    text: "Configure replication from bucket A to bucket C, then from bucket C to bucket B"
correct: ["a"]
references: []
tags: ["s3", "storage", "imported"]
status: reviewed
lastReviewed: 2026-09-17
---

## Explanation

The correct answer is **Configure replication from bucket A to bucket B, then from bucket A to bucket C**.

## Why the other options are incorrect

- **Configure replication from bucket A to bucket B, then from bucket B to bucket C:** S3 Replication doesn't support "chaining" of replication.
- **Configure replication from bucket A to bucket C, then from bucket C to bucket B:** S3 Replication doesn't support "chaining" of replication.
