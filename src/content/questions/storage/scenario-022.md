---
id: saa-scenario-022
title: "A fleet of Linux web servers in multiple Availability Zones needs concurrent shared access to uploaded files with POSIX semantics. Which storage service should be used?"
domain: storage
services: [Amazon EFS]
difficulty: hard
type: single
choices:
  - id: a
    text: Amazon EBS Multi-Attach
  - id: b
    text: Amazon S3
  - id: c
    text: Amazon EFS
  - id: d
    text: Instance store
correct: [c]
references: [{ note: block-file-and-windows-storage }]
tags: [efs,file-storage,multi-az,linux, scenario-based]
status: reviewed
lastReviewed: 2026-09-16
---

## Explanation

**Amazon EFS** directly meets the stated technical and operational requirements. The alternatives do not provide the required behavior or are not designed for this use case.

