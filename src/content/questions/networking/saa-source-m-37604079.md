---
id: saa-source-m-37604079
title: "What does this CIDR 10.0.4.0/28 correspond to?"
domain: networking
services: ["VPC", "Route 53", "CloudFront", "Transit Gateway", "Direct Connect"]
difficulty: medium
type: single
choices:
  - id: a
    text: "10.0.4.0 to 10.0.4.15"
  - id: b
    text: "10.0.4.0 to 10.0.32.0"
  - id: c
    text: "10.0.4.0 to 10.0.4.28"
  - id: d
    text: "10.0.0.0 to 10.0.16.0"
correct: ["a"]
references: []
tags: ["networking", "imported"]
status: reviewed
lastReviewed: 2026-09-24
---

## Explanation

/28 means 16 IPs (=2^(32-28) = 2^4), means only the last digit can change.
