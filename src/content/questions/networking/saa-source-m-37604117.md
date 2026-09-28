---
id: saa-source-m-37604117
title: "You have set up a Direct Connect connection between your corporate data center and your VPC A in your AWS account. You need to access VPC B in another AWS region from your corporate datacenter as well. What should you do?"
domain: networking
services: ["VPC", "Route 53", "CloudFront", "Transit Gateway", "Direct Connect"]
difficulty: medium
type: single
choices:
  - id: a
    text: "Enable VPC Peering"
  - id: b
    text: "Use a Customer Gateway"
  - id: c
    text: "Use a Direct Connect Gateway"
  - id: d
    text: "Set up a NAT Gateway"
correct: ["c"]
references: []
tags: ["networking", "imported"]
status: reviewed
lastReviewed: 2026-09-24
---

## Explanation

This is the main use case of Direct Connect Gateways.

## Why the other options are incorrect

- **Enable VPC Peering:** You can't create a VPC Peering connection between VPC and on-premises corporate data center. Also, the VPC Peering connection is not transitive.
