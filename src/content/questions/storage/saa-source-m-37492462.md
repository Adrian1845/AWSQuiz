---
id: saa-source-m-37492462
title: "You have a fleet of EC2 instances distributes across AZs that process a large data set. What do you recommend to make the same data to be accessible as an NFS drive to all of your EC2 instances?"
domain: storage
services: ["EC2", "EBS", "EFS"]
difficulty: medium
type: single
choices:
  - id: a
    text: "Use EBS"
  - id: b
    text: "Use EFS"
  - id: c
    text: "Use an Instance Store"
correct: ["b"]
references: []
tags: ["ec2", "storage", "imported"]
status: reviewed
lastReviewed: 2026-09-17
---

## Explanation

EFS is a network file system (NFS) that allows you to mount the same file system on EC2 instances that are in different AZs.

## Why the other options are incorrect

- **Use EBS:** EBS volumes are locked to an AZ and can only be mounted on one EC2 instance at a time.
- **Use an Instance Store:** EC2 Instance Store is a storage located on disks that are physically attached to the host of your EC2 instance. Can be used only on one EC2 instance at a time. It's ideal for temporary storage such as buffers, caches, etc.
