---
id: saa-source-m-37594405
title: "Your EC2 Windows Servers need to share some data by having a Network File System mounted on them which respects the Windows security mechanisms and has integration with Microsoft Active Directory. What do you recommend?"
domain: storage
services: ["S3", "EBS", "EFS", "FSx", "DataSync", "Storage Gateway"]
difficulty: medium
type: single
choices:
  - id: a
    text: "Amazon FSx for Windows (File Server)"
  - id: b
    text: "Amazon EFS"
  - id: c
    text: "Amazon FSx for Lustre"
  - id: d
    text: "S3 File Gateway"
correct: ["a"]
references: []
tags: ["storage", "imported"]
status: reviewed
lastReviewed: 2026-09-24
---

## Explanation

The correct answer is **Amazon FSx for Windows (File Server)**.

## Why the other options are incorrect

- **Amazon EFS:** This is for Linux.
- **Amazon FSx for Lustre:** This is for HPC and Linux.
