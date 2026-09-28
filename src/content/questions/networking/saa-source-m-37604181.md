---
id: saa-source-m-37604181
title: "Your company has several on-premises sites across the USA. These sites are currently linked using private connections, but your private connections provider has been recently quite unstable, making your IT architecture partially offline. You would like to create a backup connection that will use the public Internet to link your on-premises sites, that you can failover in case of issues with your provider. What do you recommend?"
domain: networking
services: ["VPC", "Route 53", "CloudFront", "Transit Gateway", "Direct Connect"]
difficulty: medium
type: single
choices:
  - id: a
    text: "VPC Peering"
  - id: b
    text: "AWS VPN CloudHub"
  - id: c
    text: "Direct Connect"
  - id: d
    text: "AWS PrivateLink"
correct: ["b"]
references: []
tags: ["networking", "imported"]
status: reviewed
lastReviewed: 2026-09-24
---

## Explanation

AWS VPN CloudHub allows you to securely communicate with multiple sites using AWS VPN. It operates on a simple hub-and-spoke model that you can use with or without a VPC.

## Why the other options are incorrect

- **VPC Peering:** VPC Peering connection is a networking connection between two VPCs that enables you to route traffic between them using private IPv4/IPv6 addresses. It can't be used with on-premises networks.
- **Direct Connect:** AWS Direct Connect allows you to establish a dedicated network connection between AWS and your on-premises. This would work, but it will be very expensive. This is a private connection and the question states that the backup connection can use the public Internet.
