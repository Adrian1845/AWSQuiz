---
id: saa-source-m-37492318
title: "What is EBS Multi-Attach?"
domain: storage
services: ["EC2", "EBS", "EFS"]
difficulty: medium
type: single
choices:
  - id: a
    text: "Attach the same EBS volume to multiple EC2 instances in multiple AZs"
  - id: b
    text: "Attach multiple EBS volumes in the same AZ to the same EC2 instance"
  - id: c
    text: "Attach the same EBS volume to multiple EC2 instances in the same AZ"
  - id: d
    text: "Attach multiple EBS volumes in multiple AZs to the same EC2 instance"
correct: ["c"]
references: []
tags: ["ec2", "storage", "imported"]
status: reviewed
lastReviewed: 2026-09-17
---

## Explanation

Using EBS Multi-Attach, you can attach the same EBS volume to multiple EC2 instances in the same AZ. Each EC2 instance has full read/write permissions.
