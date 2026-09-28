---
id: saa-source-m-51043480
title: "As a Solutions Architect, you have been instructed you to prepare a disaster recovery plan for a Redshift cluster. What should you do?"
domain: data-and-analytics
services: ["Athena", "Glue", "EMR", "Kinesis", "Redshift"]
difficulty: medium
type: single
choices:
  - id: a
    text: "Enable Multi-AZ"
  - id: b
    text: "Enable Automated Snapshots, then configure your Redshift cluster to automatically copy snapshots to another AWS region"
  - id: c
    text: "Take a snapshot then restore to a Redshift Global cluster"
correct: ["b"]
references: []
tags: ["data-analytics", "imported"]
status: reviewed
lastReviewed: 2026-09-24
---

## Explanation

The correct answer is **Enable Automated Snapshots, then configure your Redshift cluster to automatically copy snapshots to another AWS region**.
