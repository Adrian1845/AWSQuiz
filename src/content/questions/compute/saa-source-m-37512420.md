---
id: saa-source-m-37512420
title: "You want to create a custom application-based cookie in your Application Load Balancer. Which of the following you can use as a cookie name?"
domain: compute
services: ["EC2", "Auto Scaling", "Elastic Load Balancing"]
difficulty: medium
type: single
choices:
  - id: a
    text: "AWSALBAPP"
  - id: b
    text: "APPUSERC"
  - id: c
    text: "AWSALBTG"
  - id: d
    text: "AWSALB"
correct: ["b"]
references: []
tags: ["availability", "scalability", "imported"]
status: reviewed
lastReviewed: 2026-09-17
---

## Explanation

The following cookie names are reserved by the ELB (AWSALB, AWSALBAPP, AWSALBTG).
