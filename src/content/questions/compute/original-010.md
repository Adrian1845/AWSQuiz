---
id: saa-original-010
title: "What should a solutions architect choose for a software vendor that needs to run a long-lived application requiring OS-level access and a custom kernel module?"
domain: compute
services: [EC2]
difficulty: medium
type: single
choices:
  - id: a
    text: AWS Lambda
  - id: b
    text: Amazon EC2
  - id: c
    text: AWS Fargate
  - id: d
    text: AWS App Runner
correct: [b]
references: [{ note: ec2 }]
tags: [compute,virtual-machines, practice-bank]
status: reviewed
lastReviewed: 2026-09-15
---

## Explanation

**Amazon EC2** is the best fit because it is designed to run a long-lived application requiring OS-level access and a custom kernel module. The other options do not directly satisfy the stated requirement.
