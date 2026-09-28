---
id: saa-original-002
title: "A solutions architect is designing for a media platform that must mount shared POSIX storage from Linux instances in multiple Availability Zones. Which option should be recommended?"
domain: storage
services: [EFS]
difficulty: medium
type: single
choices:
  - id: a
    text: Amazon EBS
  - id: b
    text: Amazon EFS
  - id: c
    text: Instance store
  - id: d
    text: Amazon FSx for Windows
correct: [b]
references: [{ note: block-file-and-windows-storage }]
tags: [file-storage,high-availability, practice-bank]
status: reviewed
lastReviewed: 2026-09-15
---

## Explanation

**Amazon EFS** is the best fit because it is designed to mount shared POSIX storage from Linux instances in multiple Availability Zones. The other options do not directly satisfy the stated requirement.
