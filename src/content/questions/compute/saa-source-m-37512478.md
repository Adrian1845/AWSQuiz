---
id: saa-source-m-37512478
title: "An application is deployed with an Application Load Balancer and an Auto Scaling Group. Currently, you manually scale the ASG and you would like to define a Scaling Policy that will ensure the average number of connections to your EC2 instances is around 1000. Which Scaling Policy should you use?"
domain: compute
services: ["EC2", "Auto Scaling", "Elastic Load Balancing"]
difficulty: medium
type: single
choices:
  - id: a
    text: "Simple Scaling Policy"
  - id: b
    text: "Step Scaling Policy"
  - id: c
    text: "Target Tracking Policy"
  - id: d
    text: "Scheduled Scaling Policy"
correct: ["c"]
references: []
tags: ["availability", "scalability", "imported"]
status: reviewed
lastReviewed: 2026-09-17
---

## Explanation

The correct answer is **Target Tracking Policy**.
