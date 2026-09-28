---
id: saa-source-m-37512434
title: "You have an application hosted on a set of EC2 instances managed by an Auto Scaling Group that you configured both desired and maximum capacity to 3. Also, you have created a CloudWatch Alarm that is configured to scale out your ASG when CPU Utilization reaches 60%. Your application suddenly received huge traffic and is now running at 80% CPU Utilization. What will happen?"
domain: compute
services: ["EC2", "Auto Scaling", "Elastic Load Balancing"]
difficulty: medium
type: single
choices:
  - id: a
    text: "Nothing"
  - id: b
    text: "The desired capacity will go up to 4 and the maximum capacity will stay at 3"
  - id: c
    text: "The desired capacity will go up to 4 and the maximum capacity will stay at 4"
correct: ["a"]
references: []
tags: ["availability", "scalability", "imported"]
status: reviewed
lastReviewed: 2026-09-17
---

## Explanation

The Auto Scaling Group can't go over the maximum capacity (you configured) during scale-out events.
