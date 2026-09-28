---
id: saa-source-m-37602757
title: "You have an application that is served globally using CloudFront Distribution. You want to authenticate users at the CloudFront Edge Locations instead of authentication requests go all the way to your origins. What should you use to satisfy this requirement?"
domain: compute
services: ["Lambda", "API Gateway", "Step Functions"]
difficulty: medium
type: single
choices:
  - id: a
    text: "Lambda@Edge"
  - id: b
    text: "API Gateway"
  - id: c
    text: "DynamoDB"
  - id: d
    text: "AWS Global Accelerator"
correct: ["a"]
references: []
tags: ["serverless", "compute", "imported"]
status: reviewed
lastReviewed: 2026-09-24
---

## Explanation

Lambda@Edge is a feature of CloudFront that lets you run code closer to your users, which improves performance and reduces latency.

## Why the other options are incorrect

- **API Gateway:** API Gateway is a fully managed service that makes it easy to create, publish, maintain, monitor, and secure APIs at any scale. It can't be used to run code globally on CloudFront Edge Locations.
- **AWS Global Accelerator:** AWS Global Accelerator allows you to improve the performance of your users' traffic by up to 60% using AWS global network infrastructure. It can't be used to run code globally on CloudFront Edge Locations.
