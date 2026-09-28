---
id: saa-source-m-37586481
title: "You want to install software updates on 100s of Linux EC2 instances that you manage. You want to store these updates on shared storage which should be dynamically loaded on the EC2 instances and shouldn't require heavy operations. What do you suggest?"
domain: architecture
services: []
difficulty: medium
type: single
choices:
  - id: a
    text: "Store the software updates on EBS and sync them using data replication software from one master in each AZ"
  - id: b
    text: "Store the software updates on EFS and mount EFS as a network drive at startup"
  - id: c
    text: "Package the software updates as an EBS snapshot and create EBS volumes for each new software update"
  - id: d
    text: "Store the software updates on Amazon RDS"
correct: ["b"]
references: []
tags: ["saa", "architecture", "imported"]
status: reviewed
lastReviewed: 2026-09-17
---

## Explanation

EFS is a network file system (NFS) that allows you to mount the same file system to 100s of EC2 instances. Storing software updates on an EFS allows each EC2 instance to access them.

## Why the other options are incorrect

- **Store the software updates on EBS and sync them using data replication software from one master in each AZ:** This requires too many operations and is not a native AWS feature.
- **Package the software updates as an EBS snapshot and create EBS volumes for each new software update:** This requires too many operations although it would work.
- **Store the software updates on Amazon RDS:** RDS is meant to store relational data, not big binary files.
