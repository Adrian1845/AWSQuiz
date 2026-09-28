---
id: saa-source-m-37492010
title: "Elastic Network Interface (ENI) can be attached to EC2 instances in another AZ."
domain: compute
services: ["EC2"]
difficulty: medium
type: single
choices:
  - id: a
    text: "True"
  - id: b
    text: "False"
correct: ["b"]
references: []
tags: ["ec2", "saa", "imported"]
status: reviewed
lastReviewed: 2026-09-17
---

## Explanation

Elastic Network Interfaces (ENIs) are bounded to a specific AZ. You can not attach an ENI to an EC2 instance in a different AZ.
