---
id: saa-source-m-37604085
title: "You have a corporate network of size 10.0.0.0/8 and a satellite office of size 192.168.0.0/16. Which CIDR is acceptable for your AWS VPC if you plan on connecting your networks later on?"
domain: networking
services: ["VPC", "Route 53", "CloudFront", "Transit Gateway", "Direct Connect"]
difficulty: medium
type: single
choices:
  - id: a
    text: "172.16.0.0/12"
  - id: b
    text: "172.16.0.0/16"
  - id: c
    text: "10.0.16.0/16"
  - id: d
    text: "192.168.4.0/18"
correct: ["b"]
references: []
tags: ["networking", "imported"]
status: reviewed
lastReviewed: 2026-09-24
---

## Explanation

CIDR not should overlap, and the max CIDR size in AWS is /16.
