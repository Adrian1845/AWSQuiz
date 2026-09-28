---
id: saa-source-m-37604189
title: "You need to set up a dedicated connection between your on-premises corporate datacenter and AWS Cloud. This connection must be private, consistent, and traffic must not travel through the Internet. Which AWS service should you use?"
domain: networking
services: ["VPC", "Route 53", "CloudFront", "Transit Gateway", "Direct Connect"]
difficulty: medium
type: single
choices:
  - id: a
    text: "Site-to-Site VPN"
  - id: b
    text: "AWS PrivateLink"
  - id: c
    text: "AWS Direct Connect"
  - id: d
    text: "Amazon EventBridge"
correct: ["c"]
references: []
tags: ["networking", "imported"]
status: reviewed
lastReviewed: 2026-09-24
---

## Explanation

The correct answer is **AWS Direct Connect**.

## Why the other options are incorrect

- **Site-to-Site VPN:** This would not be suitable, as traffic travels through the public Internet.
