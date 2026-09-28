---
id: saa-source-m-37492518
title: "Elastic Load Balancers provide a ......................."
domain: compute
services: ["EC2", "Auto Scaling", "Elastic Load Balancing"]
difficulty: medium
type: single
choices:
  - id: a
    text: "static IPv4 we can use in our application"
  - id: b
    text: "static DNS name we can use in our application"
  - id: c
    text: "static IPv6 we can use in our application"
correct: ["b"]
references: []
tags: ["availability", "scalability", "imported"]
status: reviewed
lastReviewed: 2026-09-17
---

## Explanation

Only Network Load Balancer provides both static DNS name and static IP. While, Application Load Balancer provides a static DNS name but it does NOT provide a static IP. The reason being that AWS wants your Elastic Load Balancer to be accessible using a static endpoint, even if the underlying infrastructure that AWS manages changes.
