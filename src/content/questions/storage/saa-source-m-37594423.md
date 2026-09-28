---
id: saa-source-m-37594423
title: "You would like to have a distributed POSIX compliant file system that will allow you to maximize the IOPS in order to perform some High-Performance Computing (HPC) and genomics computational research. This file system has to easily scale to millions of IOPS. What do you recommend?"
domain: storage
services: ["S3", "EBS", "EFS", "FSx", "DataSync", "Storage Gateway"]
difficulty: medium
type: single
choices:
  - id: a
    text: "EFS with Max. IO enabled"
  - id: b
    text: "Amazon FSx for Lustre"
  - id: c
    text: "Amazon S3 mounted on the EC2 instances"
  - id: d
    text: "EC2 Instance Store"
correct: ["b"]
references: []
tags: ["storage", "imported"]
status: reviewed
lastReviewed: 2026-09-24
---

## Explanation

The correct answer is **Amazon FSx for Lustre**.

## Why the other options are incorrect

- **EFS with Max. IO enabled:** This is not meant for HPC.
- **Amazon S3 mounted on the EC2 instances:** This is not POSIX compliant.
- **EC2 Instance Store:** This will give you the IOPS, but it is not a Distributed File System.
