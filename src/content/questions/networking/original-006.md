---
id: saa-original-006
title: "A gaming company wants to route HTTPS traffic using host names and URL paths with minimal operational overhead. Which option is appropriate?"
domain: networking
services: [Elastic Load Balancing]
difficulty: hard
type: single
choices:
  - id: a
    text: A Network Load Balancer
  - id: b
    text: An Application Load Balancer
  - id: c
    text: A Gateway Load Balancer
  - id: d
    text: AWS Global Accelerator
correct: [b]
references: [{ note: load-balancing-and-scaling }]
tags: [load-balancing,http, practice-bank]
status: reviewed
lastReviewed: 2026-09-15
---

## Explanation

**An Application Load Balancer** is the best fit because it is designed to route HTTPS traffic using host names and URL paths. The other options do not directly satisfy the stated requirement.
