---
id: saa-original-003
title: "A healthcare provider requires a managed way to perform recurring online file transfers from an on-premises file system to S3. Which AWS option is the best fit?"
domain: storage
services: [DataSync]
difficulty: easy
type: single
choices:
  - id: a
    text: AWS Snowball Edge
  - id: b
    text: AWS Storage Gateway
  - id: c
    text: AWS DataSync
  - id: d
    text: Amazon EBS snapshots
correct: [c]
references: [{ note: hybrid-and-transfer }]
tags: [data-transfer,migration, practice-bank]
status: reviewed
lastReviewed: 2026-09-15
---

## Explanation

**AWS DataSync** is the best fit because it is designed to perform recurring online file transfers from an on-premises file system to S3. The other options do not directly satisfy the stated requirement.
