---
id: saa-source-m-37604473
title: "As part of your Disaster Recovery plan, you would like to have only the critical infrastructure up and running in AWS. You don't mind a longer Recovery Time Objective (RTO). Which DR strategy do you recommend?"
domain: architecture
services: ["Route 53", "S3", "RDS", "AWS Backup"]
difficulty: medium
type: single
choices:
  - id: a
    text: "Backup and Restore"
  - id: b
    text: "Pilot Light"
  - id: c
    text: "Warm Standby"
  - id: d
    text: "Multi-Site"
correct: ["b"]
references: []
tags: ["disaster-recovery", "architecture", "imported"]
status: reviewed
lastReviewed: 2026-09-24
---

## Explanation

If you're interested, read more about Disaster Recovery options in AWS here: https://docs.aws.amazon.com/whitepapers/latest/disaster-recovery-workloads-on-aws/disaster-recovery-options-in-the-cloud.html
