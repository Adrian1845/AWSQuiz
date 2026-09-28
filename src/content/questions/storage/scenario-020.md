---
id: saa-scenario-020
title: "A regulated company must prevent even administrators from deleting archived S3 objects until a fixed retention period ends. Which S3 feature should be used?"
domain: storage
services: [S3 Object Lock]
difficulty: medium
type: single
choices:
  - id: a
    text: S3 Object Lock in compliance mode
  - id: b
    text: S3 Versioning only
  - id: c
    text: S3 Lifecycle expiration
  - id: d
    text: S3 Transfer Acceleration
correct: [a]
references: [{ note: s3 }]
tags: [s3,object-lock,compliance,worm, scenario-based]
status: reviewed
lastReviewed: 2026-09-16
---

## Explanation

**S3 Object Lock in compliance mode** directly meets the stated technical and operational requirements. The alternatives do not provide the required behavior or are not designed for this use case.

