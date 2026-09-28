---
id: saa-s3-001
title: "A company stores objects in Amazon S3. Access patterns are unpredictable and objects must remain immediately available. Which storage class minimizes operational effort to optimize costs?"
domain: storage
services: [S3]
difficulty: medium
type: single
choices:
  - id: a
    text: S3 Standard
  - id: b
    text: S3 Intelligent-Tiering
  - id: c
    text: S3 Glacier Flexible Retrieval
  - id: d
    text: S3 One Zone-IA
correct: [b]
references: [{ note: s3, section: intelligent-tiering }]
tags: [cost-optimization, storage-classes]
status: reviewed
lastReviewed: 2026-09-14
---

## Explanation

**S3 Intelligent-Tiering** automatically moves objects between access tiers as access patterns change while preserving millisecond retrieval. Glacier Flexible Retrieval is not immediate, and One Zone-IA does not provide multi-AZ resilience.
