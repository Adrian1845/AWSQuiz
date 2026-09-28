---
id: saa-source-m-51345508
title: "A company is migrating a web application to AWS Cloud and they are going to use a set of EC2 instances in an EC2 Auto Scaling Group. The web application is made of multiple components so they will need a host-based routing feature to route to specific web application components. This web application is used by many customers and therefore the web application must have a static IP address so it can be whitelisted by the customers’ firewalls. As the customers are distributed around the world, the web application must also provide low latency to all customers. Which AWS service can help you to assign a static IP address and provide low latency across the globe?"
domain: networking
services: ["CloudFront", "Route 53", "Global Accelerator"]
difficulty: medium
type: single
choices:
  - id: a
    text: "AWS Global Accelerator + Application Load Balancer"
  - id: b
    text: "Amazon CloudFront"
  - id: c
    text: "Network Load Balancer"
  - id: d
    text: "Application Load Balancer"
correct: ["a"]
references: []
tags: ["cloudfront", "edge", "networking", "imported"]
status: reviewed
lastReviewed: 2026-09-24
---

## Explanation

The correct answer is **AWS Global Accelerator + Application Load Balancer**.
