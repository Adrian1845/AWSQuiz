---
id: saa-source-m-37602751
title: "You are running an application in production that is leveraging DynamoDB as its datastore and is experiencing smooth sustained usage. There is a need to make the application run in development mode as well, where it will experience the unpredictable volume of requests. What is the most cost-effective solution that you recommend?"
domain: compute
services: ["Lambda", "API Gateway", "Step Functions"]
difficulty: medium
type: single
choices:
  - id: a
    text: "Use Provisioned Capacity Mode with Auto Scaling enabled for both development and production"
  - id: b
    text: "Use Provisioned Capacity Mode with Auto Scaling enabled for production and use On-Demand Capacity Mode for development"
  - id: c
    text: "Use Provisioned Capacity Mode with Auto Scaling enabled for development and use On-Demand Capacity Mode for production"
  - id: d
    text: "Use On-Demand Capacity Mode for both development and production"
correct: ["b"]
references: []
tags: ["serverless", "compute", "imported"]
status: reviewed
lastReviewed: 2026-09-24
---

## Explanation

The correct answer is **Use Provisioned Capacity Mode with Auto Scaling enabled for production and use On-Demand Capacity Mode for development**.

## Why the other options are incorrect

- **Use On-Demand Capacity Mode for both development and production:** This will work, but it would be extremely expensive as On-Demand Capacity Mode is much more expensive than Provisioned Capacity Mode. As we know production has a smooth sustained curve, Provisioned Capacity Mode with Auto Scaling enabled would be perfect.
