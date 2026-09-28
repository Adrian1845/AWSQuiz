---
id: saa-source-m-37586457
title: "Your website TriangleSunglasses.com is hosted on a fleet of EC2 instances managed by an Auto Scaling Group and fronted by an Application Load Balancer. Your ASG has been configured to scale on-demand based on the traffic going to your website. To reduce costs, you have configured the ASG to scale based on the traffic going through the ALB. To make the solution highly available, you have updated your ASG and set the minimum capacity to 2. How can you further reduce the costs while respecting the requirements?"
domain: architecture
services: []
difficulty: medium
type: single
choices:
  - id: a
    text: "Remove the ALB and use an Elastic IP instead"
  - id: b
    text: "Reserve two EC2 instances"
  - id: c
    text: "Reduce the minimum capacity to 1"
  - id: d
    text: "Reduce the minimum capacity to 0"
correct: ["b"]
references: []
tags: ["saa", "architecture", "imported"]
status: reviewed
lastReviewed: 2026-09-17
---

## Explanation

This is the way to save further costs as we will run 2 EC2 instances no matter what.

## Why the other options are incorrect

- **Remove the ALB and use an Elastic IP instead:** This is not efficient for scaling purposes.
- **Reduce the minimum capacity to 1:** Our solution won't be highly available anymore.
- **Reduce the minimum capacity to 0:** Our solution will experience downtime.
