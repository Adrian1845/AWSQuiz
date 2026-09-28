---
id: saa-source-m-37491686
title: "You would like to deploy a High-Performance Computing (HPC) application on EC2 instances. Which EC2 instance type should you choose?"
domain: compute
services: ["EC2"]
difficulty: medium
type: single
choices:
  - id: a
    text: "Storage Optimized"
  - id: b
    text: "Compute Optimized"
  - id: c
    text: "Memory Optimized"
  - id: d
    text: "General Purpose"
correct: ["b"]
references: []
tags: ["ec2", "imported"]
status: reviewed
lastReviewed: 2026-09-17
---

## Explanation

Compute Optimized EC2 instances are great for compute-intensive workloads requiring high-performance processors (e.g., batch processing, media transcoding, high-performance computing, scientific modeling & machine learning, and dedicated gaming servers).

## Why the other options are incorrect

- **Storage Optimized:** Storage Optimized EC2 instances are great for workloads requiring high, sequential read/write access to large data sets on local storage.
- **Memory Optimized:** Memory Optimized EC2 instances are great for workloads requiring large data sets in memory.
- **General Purpose:** General Purpose EC2 instances are great for a diversity of workloads that require a balance between computing, memory, and network.
