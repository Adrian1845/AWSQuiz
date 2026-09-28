---
id: saa-source-m-37492134
title: "The following are true regarding EC2 Hibernate, EXCEPT:"
domain: compute
services: ["EC2"]
difficulty: medium
type: single
choices:
  - id: a
    text: "EC2 Instance Root Volume must be an Instance Store volume"
  - id: b
    text: "Supports On-Demand and Reserved Instances"
  - id: c
    text: "EC2 Instance RAM must be less than 150GB"
  - id: d
    text: "EC2 Instance Root Volume type must be an EBS volume"
correct: ["a"]
references: []
tags: ["ec2", "saa", "imported"]
status: reviewed
lastReviewed: 2026-09-17
---

## Explanation

To enable EC2 Hibernate, the EC2 Instance Root Volume type must be an EBS volume and must be encrypted to ensure the protection of sensitive content.
