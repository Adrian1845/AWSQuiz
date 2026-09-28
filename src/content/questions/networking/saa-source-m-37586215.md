---
id: saa-source-m-37586215
title: "You have deployed a new Elastic Beanstalk environment and would like to direct 5% of your production traffic to this new environment. This allows you to monitor for CloudWatch metrics and ensuring that there're no bugs exist with your new environment. Which Route 53 Routing Policy allows you to do so?"
domain: networking
services: ["Route 53"]
difficulty: medium
type: single
choices:
  - id: a
    text: "Simple"
  - id: b
    text: "Weighted"
  - id: c
    text: "Latency"
  - id: d
    text: "Failover"
correct: ["b"]
references: []
tags: ["route53", "dns", "imported"]
status: reviewed
lastReviewed: 2026-09-17
---

## Explanation

Weighted Routing Policy allows you to redirect part of the traffic based on weight (e.g., percentage). It's a common use case to send part of traffic to a new version of your application.
