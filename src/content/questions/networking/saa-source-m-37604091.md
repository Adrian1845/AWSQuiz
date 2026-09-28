---
id: saa-source-m-37604091
title: "You plan on creating a subnet and want it to have at least capacity for 28 EC2 instances. What's the minimum size you need to have for your subnet?"
domain: networking
services: ["VPC", "Route 53", "CloudFront", "Transit Gateway", "Direct Connect"]
difficulty: medium
type: single
choices:
  - id: a
    text: "/28"
  - id: b
    text: "/27"
  - id: c
    text: "/26"
  - id: d
    text: "/25"
correct: ["c"]
references: []
tags: ["networking", "imported"]
status: reviewed
lastReviewed: 2026-09-24
---

## Explanation

Perfect size, 64 IPs.

## Why the other options are incorrect

- **/28:** Too small, it's 16 IPs, 5 of them already reserved by AWS.
- **/27:** Too small, it's 32 IPs, 5 of them already reserved by AWS.
- **/25:** Too big, it's 128 IPs.
