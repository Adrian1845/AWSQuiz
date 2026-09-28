---
id: saa-source-m-37604103
title: "You have attached an Internet Gateway to your VPC, but your EC2 instances still don't have access to the internet. What is NOT a possible issue?"
domain: networking
services: ["VPC", "Route 53", "CloudFront", "Transit Gateway", "Direct Connect"]
difficulty: medium
type: single
choices:
  - id: a
    text: "Route Tables are missing entries"
  - id: b
    text: "The EC2 instances don't have public IPs"
  - id: c
    text: "The Security Group does not allow traffic in"
  - id: d
    text: "The NACL does not allow network traffic out"
correct: ["c"]
references: []
tags: ["networking", "imported"]
status: reviewed
lastReviewed: 2026-09-24
---

## Explanation

Security groups are stateful and if traffic can go out, then it can go back in.
