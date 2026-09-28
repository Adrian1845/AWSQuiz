---
id: saa-source-m-37604147
title: "How can you capture information about IP traffic inside your VPCs?"
domain: networking
services: ["VPC", "Route 53", "CloudFront", "Transit Gateway", "Direct Connect"]
difficulty: medium
type: single
choices:
  - id: a
    text: "Enable VPC Flow Logs"
  - id: b
    text: "Enable VPC Traffic Mirroring"
  - id: c
    text: "Enable CloudWatch Traffic Logs"
correct: ["a"]
references: []
tags: ["networking", "imported"]
status: reviewed
lastReviewed: 2026-09-24
---

## Explanation

VPC Flow Logs is a VPC feature that enables you to capture information about the IP traffic going to and from network interfaces in your VPC.

## Why the other options are incorrect

- **Enable VPC Traffic Mirroring:** VPC Traffic Mirroring is a VPC feature that you can use to copy network traffic from an Elastic Network Interface (ENI). Use cases include content inspection, threat monitoring, and troubleshooting.
- **Enable CloudWatch Traffic Logs:** There's no such feature.
