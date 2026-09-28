---
id: saa-source-m-37492490
title: "You are running a high-performance database that requires an IOPS of 310,000 for its underlying storage. What do you recommend?"
domain: storage
services: ["EC2", "EBS", "EFS"]
difficulty: medium
type: single
choices:
  - id: a
    text: "Use an EBS gp2 drive"
  - id: b
    text: "Use an EBS io1 drive"
  - id: c
    text: "Use an EC2 Instance Store"
  - id: d
    text: "Use an EBS io2 Block Express drive"
correct: ["c"]
references: []
tags: ["ec2", "storage", "imported"]
status: reviewed
lastReviewed: 2026-09-17
---

## Explanation

You can run a database on an EC2 instance that uses an Instance Store, but you'll have a problem that the data will be lost if the EC2 instance is stopped (it can be restarted without problems). One solution is that you can set up a replication mechanism on another EC2 instance with an Instance Store to have a standby copy. Another solution is to set up backup mechanisms for your data. It's all up to you how you want to set up your architecture to validate your requirements. In this use case, it's around IOPS, so we have to choose an EC2 Instance Store.

## Why the other options are incorrect

- **Use an EBS gp2 drive:** 16,000 is the maximum IOPS you can achieve when you're using the EBS gp2 volume type.
- **Use an EBS io1 drive:** 64,000 is the maximum IOPS you can achieve when you're using EBS io1 or io2 volume types.
- **Use an EBS io2 Block Express drive:** 256,000 is the maximum IOPS you can achieve when you're using the EBS io2 Block Express volume type.
