---
id: saa-source-m-37491722
title: "You have an e-commerce application with an OLTP database hosted on-premises. This application has popularity which results in its database has thousands of requests per second. You want to migrate the database to an EC2 instance. Which EC2 Instance Type should you choose to handle this high-frequency OLTP database?"
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
correct: ["b"]
references: []
tags: ["ec2", "imported"]
status: reviewed
lastReviewed: 2026-09-17
---

## Explanation

Storage Optimized EC2 instances are great for workloads requiring high, sequential read/write access to large data sets on local storage.

## Why the other options are incorrect

- **Compute Optimized:** Compute Optimized EC2 instances are great for compute-intensive workloads requiring high-performance processors (e.g., batch processing, media transcoding, high-performance computing, scientific modeling & machine learning, and dedicated gaming servers).
- **Memory Optimized:** Memory Optimized EC2 instances are great for workloads requiring large data sets in memory.
- **General Purpose:** General Purpose EC2 instances are great for a diversity of workloads that require a balance between computing, memory, and network.
