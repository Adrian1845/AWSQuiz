---
id: saa-source-m-37603107
title: "You have an application hosted on a fleet of EC2 instances managed by an Auto Scaling Group that you configured its minimum capacity to 2. Also, you have created a CloudWatch Alarm that is configured to scale in your ASG when CPU Utilization is below 60%. Currently, your application runs on 2 EC2 instances and has low traffic and the CloudWatch Alarm is in the ALARM state. What will happen?"
domain: operations
services: ["CloudWatch", "CloudTrail", "AWS Config", "X-Ray"]
difficulty: medium
type: single
choices:
  - id: a
    text: "One EC2 instance will be terminated and the ASG desired and minimum capacity will go to 1"
  - id: b
    text: "The CloudWatch Alarm will remain in ALARM state but never decrease the number of EC2 instances in the ASG"
  - id: c
    text: "The CloudWatch Alarm will be detached from my ASG"
  - id: d
    text: "The CloudWatch Alarm will go in OK state"
correct: ["b"]
references: []
tags: ["monitoring", "operations", "imported"]
status: reviewed
lastReviewed: 2026-09-24
---

## Explanation

The number of EC2 instances in an ASG can not go below the minimum capacity, even if the CloudWatch alarm would in theory trigger an EC2 instance termination.
