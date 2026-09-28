---
id: saa-source-m-37604113
title: "You would like to provide Internet access to your EC2 instances in private subnets with IPv4 while making sure this solution requires the least amount of administration and scales seamlessly. What should you use?"
domain: networking
services: ["VPC", "Route 53", "CloudFront", "Transit Gateway", "Direct Connect"]
difficulty: medium
type: single
choices:
  - id: a
    text: "NAT Instances with Source/Destination Check flag off"
  - id: b
    text: "Egress Only Internet Gateway"
  - id: c
    text: "NAT Gateway"
correct: ["c"]
references: []
tags: ["networking", "imported"]
status: reviewed
lastReviewed: 2026-09-24
---

## Explanation

The correct answer is **NAT Gateway**.

## Why the other options are incorrect

- **NAT Instances with Source/Destination Check flag off:** This means creating a NAT EC2 Instance and although this would work, it would require some integration and would not scale seamlessly.
- **Egress Only Internet Gateway:** This is for IPv6 only.
