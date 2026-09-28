---
id: saa-source-m-37491692
title: "Which EC2 Purchasing Option should you use for an application you plan to run on a server continuously for 1 year?"
domain: compute
services: ["EC2"]
difficulty: medium
type: single
choices:
  - id: a
    text: "Reserved Instances"
  - id: b
    text: "Spot Instances"
  - id: c
    text: "On-Demand Instances"
correct: ["a"]
references: []
tags: ["ec2", "imported"]
status: reviewed
lastReviewed: 2026-09-17
---

## Explanation

Reserved Instances are good for long workloads. You can reserve EC2 instances for 1 or 3 years.

## Why the other options are incorrect

- **Spot Instances:** Spot Instances are good for short workloads but are less reliable.
- **On-Demand Instances:** On-demand Instances are good for short workloads with predictable pricing.
