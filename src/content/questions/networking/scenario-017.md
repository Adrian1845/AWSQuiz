---
id: saa-scenario-017
title: "A financial application needs TCP load balancing, source IP preservation, and static IP addresses for firewall allow lists. Which load balancer should be used?"
domain: networking
services: [Network Load Balancer]
difficulty: medium
type: single
choices:
  - id: a
    text: Application Load Balancer
  - id: b
    text: Network Load Balancer
  - id: c
    text: Gateway Load Balancer
  - id: d
    text: Amazon CloudFront
correct: [b]
references: [{ note: load-balancing-and-scaling }]
tags: [nlb,load-balancing,tcp,static-ip, scenario-based]
status: reviewed
lastReviewed: 2026-09-16
---

## Explanation

**Network Load Balancer** directly meets the stated technical and operational requirements. The alternatives do not provide the required behavior or are not designed for this use case.

