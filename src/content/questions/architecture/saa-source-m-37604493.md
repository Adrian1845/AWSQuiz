---
id: saa-source-m-37604493
title: "You are running many resources in AWS such as EC2 instances, EBS volumes, DynamoDB tables... You want an easy way to manage backups across all these AWS services from a single place. Which AWS offering makes this process easy?"
domain: architecture
services: ["Route 53", "S3", "RDS", "AWS Backup"]
difficulty: medium
type: single
choices:
  - id: a
    text: "Amazon S3"
  - id: b
    text: "AWS Storage Gateway"
  - id: c
    text: "AWS Backup"
  - id: d
    text: "EC2 Snapshots"
correct: ["c"]
references: []
tags: ["disaster-recovery", "architecture", "imported"]
status: reviewed
lastReviewed: 2026-09-24
---

## Explanation

AWS Backup enables you to centralize and automate data protection across AWS services. It helps you support your regulatory compliance or business policies for data protection.
