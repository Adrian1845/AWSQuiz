---
id: saa-source-m-51342356
title: "A WordPress website is hosted in a set of EC2 instances in an EC2 Auto Scaling Group and fronted by a CloudFront Distribution which is configured to cache the content for 3 days. You have released a new version of the website and want to release it immediately to production without waiting for 3 days for the cached content to be expired. What is the easiest and most efficient way to solve this?"
domain: networking
services: ["CloudFront", "Route 53", "Global Accelerator"]
difficulty: medium
type: single
choices:
  - id: a
    text: "Open a support ticket with AWS Support to remove the CloudFront Cache"
  - id: b
    text: "CloudFront Cache Invalidation"
  - id: c
    text: "EC2 Cache Invalidation"
correct: ["b"]
references: []
tags: ["cloudfront", "edge", "networking", "imported"]
status: reviewed
lastReviewed: 2026-09-24
---

## Explanation

The correct answer is **CloudFront Cache Invalidation**.
