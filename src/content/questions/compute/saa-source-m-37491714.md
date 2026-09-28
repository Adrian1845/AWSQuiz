---
id: saa-source-m-37491714
title: "Which EC2 Instance Type should you choose for a critical application that uses an in-memory database?"
domain: compute
services: ["EC2"]
difficulty: medium
type: single
choices:
  - id: a
    text: "Compute Optimized"
  - id: b
    text: "Storage Optimized"
  - id: c
    text: "Memory Optimized"
  - id: d
    text: "General Purpose"
correct: ["c"]
references: []
tags: ["ec2", "imported"]
status: reviewed
lastReviewed: 2026-09-17
---

## Explanation

Memory Optimized EC2 instances are great for workloads requiring large data sets in memory.

## Why the other options are incorrect

- **Compute Optimized:** Compute Optimized EC2 instances are great for compute-intensive workloads requiring high-performance processors (e.g., batch processing, media transcoding, high-performance computing, scientific modeling & machine learning, and dedicated gaming servers).
- **Storage Optimized:** Storage Optimized EC2 instances are great for workloads requiring high, sequential read/write access to large data sets on local storage.
- **General Purpose:** General Purpose EC2 instances are great for a diversity of workloads that require a balance between computing, memory, and network.
