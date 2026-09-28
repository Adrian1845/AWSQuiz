---
id: saa-original-005
title: "Which AWS service or feature should a financial firm select when it needs to privately access Amazon S3 without NAT gateway data processing charges?"
domain: networking
services: [VPC Endpoint]
difficulty: easy
type: single
choices:
  - id: a
    text: A gateway VPC endpoint
  - id: b
    text: An interface VPC endpoint
  - id: c
    text: A NAT instance
  - id: d
    text: An internet gateway
correct: [a]
references: [{ note: vpc }]
tags: [vpc-endpoints,cost-optimization, practice-bank]
status: reviewed
lastReviewed: 2026-09-15
---

## Explanation

**A gateway VPC endpoint** is the best fit because it is designed to privately access Amazon S3 without NAT gateway data processing charges. The other options do not directly satisfy the stated requirement.
