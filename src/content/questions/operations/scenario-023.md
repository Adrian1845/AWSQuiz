---
id: saa-scenario-023
title: "An auditor asks which principal called an AWS API to delete a security group and from which source IP address. Which service provides this record?"
domain: operations
services: [AWS CloudTrail]
difficulty: medium
type: single
choices:
  - id: a
    text: Amazon CloudWatch metrics
  - id: b
    text: AWS Config
  - id: c
    text: AWS X-Ray
  - id: d
    text: AWS CloudTrail
correct: [d]
references: [{ note: observability }]
tags: [cloudtrail,audit,api-calls,security, scenario-based]
status: reviewed
lastReviewed: 2026-09-16
---

## Explanation

**AWS CloudTrail** directly meets the stated technical and operational requirements. The alternatives do not provide the required behavior or are not designed for this use case.

