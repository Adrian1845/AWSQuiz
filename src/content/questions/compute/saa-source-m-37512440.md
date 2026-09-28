---
id: saa-source-m-37512440
title: "Your boss asked you to scale your Auto Scaling Group based on the number of requests per minute your application makes to your database. What should you do?"
domain: compute
services: ["EC2", "Auto Scaling", "Elastic Load Balancing"]
difficulty: medium
type: single
choices:
  - id: a
    text: "Create a CloudWatch custom metric then create a CloudWatch Alarm on this metric to scale your ASG"
  - id: b
    text: "You politely tell him it's impossible"
  - id: c
    text: "Enable Detailed Monitoring then create a CloudWatch Alarm to scale your ASG"
correct: ["a"]
references: []
tags: ["availability", "scalability", "imported"]
status: reviewed
lastReviewed: 2026-09-17
---

## Explanation

There's no CloudWatch Metric for "requests per minute" for backend-to-database connections. You need to create a CloudWatch Custom Metric, then create a CloudWatch Alarm.
