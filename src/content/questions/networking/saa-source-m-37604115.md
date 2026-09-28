---
id: saa-source-m-37604115
title: "VPC Peering has been enabled between VPC A and VPC B, and the route tables have been updated for VPC A. But, the EC2 instances cannot communicate. What is the likely issue?"
domain: networking
services: ["VPC", "Route 53", "CloudFront", "Transit Gateway", "Direct Connect"]
difficulty: medium
type: single
choices:
  - id: a
    text: "Check the NACL"
  - id: b
    text: "Check the Route Tables in VPC B"
  - id: c
    text: "Check the EC2 instance attached Security Groups"
  - id: d
    text: "Check if DNS Resolution is enabled"
correct: ["b"]
references: []
tags: ["networking", "imported"]
status: reviewed
lastReviewed: 2026-09-24
---

## Explanation

Route tables must be updated in both VPCs that are peered.
