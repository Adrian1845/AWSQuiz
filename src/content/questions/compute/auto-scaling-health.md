---
id: saa-ec2-001
title: "An Auto Scaling group must replace instances when the application becomes unhealthy, even if the EC2 instance status checks pass. What should be configured?"
domain: compute
services: [EC2, Auto Scaling, ELB]
difficulty: medium
type: single
choices:
  - id: a
    text: Enable detailed monitoring on every instance
  - id: b
    text: Configure Elastic Load Balancing health checks for the Auto Scaling group
  - id: c
    text: Create a scheduled scaling action
  - id: d
    text: Use a placement group
correct: [b]
references: [{ note: ec2, section: health-checks }]
tags: [high-availability, auto-scaling]
status: reviewed
lastReviewed: 2026-09-14
---

## Explanation

Configure the Auto Scaling group to use **ELB health checks**. The load balancer can detect when an application is not serving traffic and Auto Scaling then replaces that instance.
