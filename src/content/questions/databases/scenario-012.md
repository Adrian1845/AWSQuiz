---
id: saa-scenario-012
title: "A production relational database must fail over automatically to a standby database in another Availability Zone. The standby is not intended to serve read traffic. Which configuration is correct?"
domain: databases
services: [Amazon RDS Multi-AZ]
difficulty: medium
type: single
choices:
  - id: a
    text: Amazon RDS Multi-AZ deployment
  - id: b
    text: An RDS read replica
  - id: c
    text: Amazon ElastiCache
  - id: d
    text: Amazon Redshift Spectrum
correct: [a]
references: [{ note: rds-and-aurora }]
tags: [rds,multi-az,failover,high-availability, scenario-based]
status: reviewed
lastReviewed: 2026-09-16
---

## Explanation

**Amazon RDS Multi-AZ deployment** directly meets the stated technical and operational requirements. The alternatives do not provide the required behavior or are not designed for this use case.

