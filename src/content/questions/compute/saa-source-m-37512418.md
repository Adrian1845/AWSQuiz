---
id: saa-source-m-37512418
title: "For compliance purposes, you would like to expose a fixed static IP address to your end-users so that they can write firewall rules that will be stable and approved by regulators. What type of Elastic Load Balancer would you choose?"
domain: compute
services: ["EC2", "Auto Scaling", "Elastic Load Balancing"]
difficulty: medium
type: single
choices:
  - id: a
    text: "Application Load Balancer with an Elastic IP attached to it"
  - id: b
    text: "Network Load Balancer"
correct: ["b"]
references: []
tags: ["availability", "scalability", "imported"]
status: reviewed
lastReviewed: 2026-09-17
---

## Explanation

Network Load Balancer has one static IP address per AZ and you can attach an Elastic IP address to it. Application Load Balancers and Classic Load Balancers have a static DNS name.

## Why the other options are incorrect

- **Application Load Balancer with an Elastic IP attached to it:** You can't attach an Elastic IP address to Application Load Balancers.
