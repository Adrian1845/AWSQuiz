---
id: saa-source-m-37491740
title: "You're planning to migrate on-premises applications to AWS. Your company has strict compliance requirements that require your applications to run on dedicated servers. You also need to use your own server-bound software license to reduce costs. Which EC2 Purchasing Option is suitable for you?"
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
correct: ["b"]
references: []
tags: ["ec2", "imported"]
status: reviewed
lastReviewed: 2026-09-17
---

## Explanation

Dedicated Hosts are good for companies with strong compliance needs or for software that have complicated licensing models. This is the most expensive EC2 Purchasing Option available.

## Why the other options are incorrect

- **Convertible Reserved Instances:** Convertible Reserved Instances are good for long workloads with flexible instances. But, it does not provide you the biggest discount.
- **Spot Instances:** Spot Instances are good for short workloads and this is the cheapest EC2 Purchasing Option. But, they are less reliable because you can lose your EC2 instance.
