---
id: saa-source-m-37594183
title: "You have a static website hosted on an S3 bucket. You have created a CloudFront Distribution that points to your S3 bucket to better serve your requests and improve performance. After a while, you noticed that users can still access your website directly from the S3 bucket. You want to enforce users to access the website only through CloudFront. How would you achieve that?"
domain: networking
services: ["CloudFront", "Route 53", "Global Accelerator"]
difficulty: medium
type: single
choices:
  - id: a
    text: "Send an email to your clients and tell them to not use the S3 endpoint"
  - id: b
    text: "Configure your CloudFront Distribution and create an Origin Access Control (OAC), then update your S3 Bucket Policy to only accept requests from your CloudFront Distribution."
  - id: c
    text: "Use S3 Access Points to redirect clients to CloudFront"
correct: ["b"]
references: []
tags: ["cloudfront", "edge", "networking", "imported"]
status: reviewed
lastReviewed: 2026-09-24
---

## Explanation

The correct answer is **Configure your CloudFront Distribution and create an Origin Access Control (OAC), then update your S3 Bucket Policy to only accept requests from your CloudFront Distribution.**.
