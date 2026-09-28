---
id: saa-source-m-37492006
title: "You have a critical application hosted on a fleet of EC2 instances in which you want to achieve maximum availability when there's an AZ failure. Which EC2 Placement Group should you choose?"
domain: compute
services: ["EC2"]
difficulty: medium
type: single
choices:
  - id: a
    text: "Cluster Placement Group"
  - id: b
    text: "Partition Placement Group"
  - id: c
    text: "Spread Placement Group"
correct: ["c"]
references: []
tags: ["ec2", "saa", "imported"]
status: reviewed
lastReviewed: 2026-09-17
---

## Explanation

Spread Placement Group places your EC2 instances on different physical hardware across different AZs.

## Why the other options are incorrect

- **Cluster Placement Group:** Cluster Placement Groups won't be suitable here your EC2 instances are placed next to each other which gives you high-performance computing and networking.
- **Partition Placement Group:** Partition Placement Group won't be suitable here as your EC2 instances are grouped into partitions and distributed across different physical hardware. The question doesn't ask about connectivity between EC2 instances.
