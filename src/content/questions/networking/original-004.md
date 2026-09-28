---
id: saa-original-004
title: "To meet a new requirement, a manufacturer must let private IPv4 instances access the internet without accepting unsolicited inbound traffic. What should it use?"
domain: networking
services: [NAT Gateway]
difficulty: medium
type: single
choices:
  - id: a
    text: An internet gateway on the private subnet
  - id: b
    text: A gateway endpoint
  - id: c
    text: An egress-only internet gateway
  - id: d
    text: A NAT gateway in a public subnet
correct: [d]
references: [{ note: vpc }]
tags: [routing,private-subnet, practice-bank]
status: reviewed
lastReviewed: 2026-09-15
---

## Explanation

**A NAT gateway in a public subnet** is the best fit because it is designed to let private IPv4 instances access the internet without accepting unsolicited inbound traffic. The other options do not directly satisfy the stated requirement.
