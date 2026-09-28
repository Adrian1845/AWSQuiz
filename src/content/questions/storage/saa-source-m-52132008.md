---
id: saa-source-m-52132008
title: "You want the content of an S3 bucket to be fully available in different AWS Regions. That will help your team perform data analysis at the lowest latency and cost possible. What S3 feature should you use?"
domain: storage
services: ["S3"]
difficulty: medium
type: single
choices:
  - id: a
    text: "Amazon CloudFront Distributions"
  - id: b
    text: "S3 Versioning"
  - id: c
    text: "S3 Static Website Hosting"
  - id: d
    text: "S3 Replication"
correct: ["d"]
references: []
tags: ["s3", "storage", "imported"]
status: reviewed
lastReviewed: 2026-09-17
---

## Explanation

S3 Replication allows you to replicate data from an S3 bucket to another in the same/different AWS Region.

## Why the other options are incorrect

- **Amazon CloudFront Distributions:** Amazon CloudFront caches your data in different Edge Locations across the world, but it won't copy the content of your S3 bucket to a different AWS Region.
- **S3 Versioning:** S3 Versioning allows you to keep different versions of a file in case of overwrites.
