---
id: saa-source-m-37491492
title: "Which EC2 Purchasing Option can provide you the biggest discount, but it is not suitable for critical jobs or databases?"
domain: compute
services: ["EC2"]
difficulty: medium
type: single
choices:
  - id: a
    text: "Convertible Reserved Instances"
  - id: b
    text: "Dedicated Hosts"
  - id: c
    text: "Spot Instances"
correct: ["c"]
references: []
tags: ["ec2", "imported"]
status: reviewed
lastReviewed: 2026-09-17
---

## Explanation

Spot Instances are good for short workloads and this is the cheapest EC2 Purchasing Option. But, they are less reliable because you can lose your EC2 instance.

## Why the other options are incorrect

- **Convertible Reserved Instances:** Convertible Reserved Instances are good for long workloads with flexible instances. But, it does not provide you the biggest discount.
- **Dedicated Hosts:** Dedicated Hosts are good for companies with strong compliance needs or for software that have complicated licensing models. This is the most expensive EC2 Purchasing Option available.
