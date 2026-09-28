---
id: saa-source-m-37602699
title: "When you are using an Edge-Optimized API Gateway, your API Gateway lives in CloudFront Edge Locations across all AWS Regions."
domain: compute
services: ["Lambda", "API Gateway", "Step Functions"]
difficulty: medium
type: single
choices:
  - id: a
    text: "False"
  - id: b
    text: "True"
correct: ["a"]
references: []
tags: ["serverless", "compute", "imported"]
status: reviewed
lastReviewed: 2026-09-24
---

## Explanation

An Edge-Optimized API Gateway is best for geographically distributed clients. API requests are routed to the nearest CloudFront Edge Location which improves latency. The API Gateway still lives in one AWS Region.
