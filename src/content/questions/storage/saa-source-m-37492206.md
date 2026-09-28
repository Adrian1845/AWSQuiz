---
id: saa-source-m-37492206
title: "You have just terminated an EC2 instance in us-east-1a, and its attached EBS volume is now available. Your teammate tries to attach it to an EC2 instance in us-east-1b but he can't. What is a possible cause for this?"
domain: storage
services: ["EC2", "EBS", "EFS"]
difficulty: medium
type: single
choices:
  - id: a
    text: "He's missing IAM permissions"
  - id: b
    text: "EBS volumes are locked to an AWS Region"
  - id: c
    text: "EBS volumes are locked to an Availability Zone"
correct: ["c"]
references: []
tags: ["ec2", "storage", "imported"]
status: reviewed
lastReviewed: 2026-09-17
---

## Explanation

EBS Volumes are created for a specific AZ. It is possible to migrate them between different AZs using EBS Snapshots.
