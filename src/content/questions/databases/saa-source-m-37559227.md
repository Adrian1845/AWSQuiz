---
id: saa-source-m-37559227
title: "Your application running on a fleet of EC2 instances managed by an Auto Scaling Group behind an Application Load Balancer. Users have to constantly log back in and you don't want to enable Sticky Sessions on your ALB as you fear it will overload some EC2 instances. What should you do?"
domain: databases
services: ["RDS", "Aurora", "ElastiCache"]
difficulty: medium
type: single
choices:
  - id: a
    text: "Use your own custom Load Balancer on EC2 instances instead of using ALB"
  - id: b
    text: "Store session data in RDS"
  - id: c
    text: "Store session data in ElastiCache"
  - id: d
    text: "Store session data in a shared EBS volume"
correct: ["c"]
references: []
tags: ["rds", "aurora", "elasticache", "imported"]
status: reviewed
lastReviewed: 2026-09-17
---

## Explanation

Storing Session Data in ElastiCache is a common pattern to ensuring different EC2 instances can retrieve your user's state if needed.

## Why the other options are incorrect

- **Store session data in RDS:** RDS could work to store session data, but wouldn't provide you with high performance as ElastiCache.
- **Store session data in a shared EBS volume:** By default, EBS volumes can not be attached to multiple EC2 instances. You can use EBS Multi-Attach, but it has certain limitations. Also, EBS volumes wouldn't provide you with high performance as ElastiCache.
