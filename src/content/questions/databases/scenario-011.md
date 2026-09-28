---
id: saa-scenario-011
title: "An RDS for MySQL database has sustained read traffic that is overwhelming the primary instance. Writes must remain strongly consistent on the primary. What should be added?"
domain: databases
services: [One or more]
difficulty: medium
type: single
choices:
  - id: a
    text: Enable Multi-AZ only
  - id: b
    text: Add an RDS Proxy only
  - id: c
    text: Replace the database with an EBS volume
  - id: d
    text: One or more RDS read replicas for read-only traffic
correct: [d]
references: [{ note: rds-and-aurora }]
tags: [rds,read-replica,read-scaling, scenario-based]
status: reviewed
lastReviewed: 2026-09-16
---

## Explanation

**One or more RDS read replicas for read-only traffic** directly meets the stated technical and operational requirements. The alternatives do not provide the required behavior or are not designed for this use case.

