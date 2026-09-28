---
id: saa-source-m-37594179
title: "You have a CloudFront Distribution that serves your website hosted on a fleet of EC2 instances behind an Application Load Balancer. All your clients are from the United States, but you found that some malicious requests are coming from other countries. What should you do to only allow users from the US and block other countries?"
domain: networking
services: ["CloudFront", "Route 53", "Global Accelerator"]
difficulty: medium
type: single
choices:
  - id: a
    text: "Use CloudFront Geo Restriction"
  - id: b
    text: "Use Origin Access Control"
  - id: c
    text: "Set up a security group and attach it to your CloudFront Distribution"
  - id: d
    text: "Use a Route 53 Latency record and attach it to CloudFront"
correct: ["a"]
references: []
tags: ["cloudfront", "edge", "networking", "imported"]
status: reviewed
lastReviewed: 2026-09-24
---

## Explanation

The correct answer is **Use CloudFront Geo Restriction**.
