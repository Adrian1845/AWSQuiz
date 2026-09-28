---
id: saa-scenario-001
title: "A company uses a customer managed KMS key to encrypt Amazon S3 objects and EBS snapshots. Policy requires new cryptographic material every 6 months. What should a solutions architect recommend?"
domain: security
services: [Create a new]
difficulty: hard
type: single
choices:
  - id: a
    text: Enable automatic KMS key rotation because it runs every 6 months
  - id: b
    text: Create a new KMS key on the six-month schedule, update applications to use it, and re-encrypt data as required
  - id: c
    text: Convert the key to an AWS managed key
  - id: d
    text: Enable S3 Versioning
correct: [b]
references: [{ note: encryption-and-secrets }]
tags: [kms,key-rotation,compliance, scenario-based]
status: reviewed
lastReviewed: 2026-09-16
---

## Explanation

**Create a new KMS key on the six-month schedule, update applications to use it, and re-encrypt data as required** directly meets the stated technical and operational requirements. The alternatives do not provide the required behavior or are not designed for this use case.

