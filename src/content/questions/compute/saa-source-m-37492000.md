---
id: saa-source-m-37492000
title: "You have an application performing big data analysis hosted on a fleet of EC2 instances. You want to ensure your EC2 instances have the highest networking performance while communicating with each other. Which EC2 Placement Group should you choose?"
domain: compute
services: ["EC2"]
difficulty: medium
type: single
choices:
  - id: a
    text: "Spread Placement Group"
  - id: b
    text: "Cluster Placement Group"
  - id: c
    text: "Partition Placement Group"
correct: ["b"]
references: []
tags: ["ec2", "saa", "imported"]
status: reviewed
lastReviewed: 2026-09-17
---

## Explanation

Cluster Placement Groups place your EC2 instances next to each other which gives you high-performance computing and networking.

## Why the other options are incorrect

- **Spread Placement Group:** Spread Placement Group won't be suitable here as your EC2 instances are placed on different physical hardware. Thus, increases latency between your EC2 instances.
- **Partition Placement Group:** Partition Placement Group won't be suitable here as your EC2 instances are grouped into partitions and distributed across different physical hardware. Thus, increases latency between your EC2 instances.
