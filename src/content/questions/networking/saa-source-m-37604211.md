---
id: saa-source-m-37604211
title: "You have a VPC in your AWS account that runs in a dual-stack mode. You are continuously trying to launch an EC2 instance, but it fails. After further investigation, you have found that you are no longer have IPv4 addresses available. What should you do?"
domain: networking
services: ["VPC", "Route 53", "CloudFront", "Transit Gateway", "Direct Connect"]
difficulty: medium
type: single
choices:
  - id: a
    text: "Modify your VPC to run in IPv6 mode only"
  - id: b
    text: "Modify your VPC to run in IPv4 mode only"
  - id: c
    text: "Add an additional IPv4 CIDR to your VPC"
correct: ["c"]
references: []
tags: ["networking", "imported"]
status: reviewed
lastReviewed: 2026-09-24
---

## Explanation

The correct answer is **Add an additional IPv4 CIDR to your VPC**.
