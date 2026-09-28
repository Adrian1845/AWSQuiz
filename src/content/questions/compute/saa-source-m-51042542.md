---
id: saa-source-m-51042542
title: "You have an ASG and a Network Load Balancer. The application on your ASG supports the HTTP protocol and is integrated with the Load Balancer health checks. You are currently using the TCP health checks. You would like to migrate to using HTTP health checks, what do you do?"
domain: compute
services: ["EC2", "Auto Scaling", "Elastic Load Balancing"]
difficulty: medium
type: single
choices:
  - id: a
    text: "Migrate to an Application Load Balancer"
  - id: b
    text: "Migrate the health check to HTTP"
correct: ["b"]
references: []
tags: ["availability", "scalability", "imported"]
status: reviewed
lastReviewed: 2026-09-17
---

## Explanation

the NLB supports HTTP health checks as well as TCP and HTTPS

## Why the other options are incorrect

- **Migrate to an Application Load Balancer:** this would work, but is not necessary
