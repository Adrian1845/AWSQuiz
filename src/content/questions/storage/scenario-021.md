---
id: saa-scenario-021
title: "A company retains audit logs in S3. Logs are accessed often for 30 days, rarely for one year, and then must be retained cheaply for seven years. What is the lowest-operations solution?"
domain: storage
services: [Use S3 Lifecycle]
difficulty: medium
type: single
choices:
  - id: a
    text: Copy files manually to EBS
  - id: b
    text: Use S3 Lifecycle rules to transition objects through appropriate storage classes
  - id: c
    text: Use an SQS retention period
  - id: d
    text: Create an AMI every month
correct: [b]
references: [{ note: s3 }]
tags: [s3,lifecycle,glacier,archival,cost-optimization, scenario-based]
status: reviewed
lastReviewed: 2026-09-16
---

## Explanation

**Use S3 Lifecycle rules to transition objects through appropriate storage classes** directly meets the stated technical and operational requirements. The alternatives do not provide the required behavior or are not designed for this use case.

