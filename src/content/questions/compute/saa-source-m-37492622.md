---
id: saa-source-m-37492622
title: "You hosted an application on a set of EC2 instances fronted by an Elastic Load Balancer. A week later, users begin complaining that sometimes the application just doesn't work. You investigate the issue and found that some EC2 instances crash from time to time. What should you do to protect users from connecting to the EC2 instances that are crashing?"
domain: compute
services: ["EC2", "Auto Scaling", "Elastic Load Balancing"]
difficulty: medium
type: single
choices:
  - id: a
    text: "Enable ELB Health Checks"
  - id: b
    text: "Enable ELB Stickiness"
  - id: c
    text: "Enable SSL Termination"
  - id: d
    text: "Enable Cross-Zone Load Balancing"
correct: ["a"]
references: []
tags: ["availability", "scalability", "imported"]
status: reviewed
lastReviewed: 2026-09-17
---

## Explanation

When you enable ELB Health Checks, your ELB won't send traffic to unhealthy (crashed) EC2 instances.
