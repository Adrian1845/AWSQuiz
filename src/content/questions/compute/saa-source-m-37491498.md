---
id: saa-source-m-37491498
title: "What should you use to control traffic in and out of EC2 instances?"
domain: compute
services: ["EC2"]
difficulty: medium
type: single
choices:
  - id: a
    text: "Network Access Control List (NACL)"
  - id: b
    text: "Security Groups"
  - id: c
    text: "IAM Policies"
correct: ["b"]
references: []
tags: ["ec2", "imported"]
status: reviewed
lastReviewed: 2026-09-17
---

## Explanation

Security Groups operate at the EC2 instance level and can control traffic.

## Why the other options are incorrect

- **Network Access Control List (NACL):** This is a distractor. We will see this service later in the course. NACL operates at the subnet level.
- **IAM Policies:** IAM Policies enable you to manage access to AWS services and resources securely.
