---
id: saa-ec2-002
title: "Which EC2 placement group strategy is designed to place instances close together within a single Availability Zone for the lowest network latency?"
domain: compute
services: [EC2]
difficulty: medium
type: single
choices:
  - id: a
    text: Spread placement group
  - id: b
    text: Partition placement group
  - id: c
    text: Cluster placement group
  - id: d
    text: Dedicated host group
correct: [c]
references: [{ note: ec2, section: placement-groups }]
tags: [performance, high-performance-computing]
status: reviewed
lastReviewed: 2026-09-14
---

## Explanation

A **cluster placement group** packs instances close together in one Availability Zone. It is appropriate for applications that benefit from low-latency, high-throughput networking.
