---
id: saa-source-m-37604121
title: "When using VPC Endpoints, what are the only two AWS services that have a Gateway Endpoint available?"
domain: networking
services: ["VPC", "Route 53", "CloudFront", "Transit Gateway", "Direct Connect"]
difficulty: medium
type: single
choices:
  - id: a
    text: "Amazon S3 & Amazon SQS"
  - id: b
    text: "Amazon SQS & DynamoDB"
  - id: c
    text: "Amazon S3 & DynamoDB"
correct: ["c"]
references: []
tags: ["networking", "imported"]
status: reviewed
lastReviewed: 2026-09-24
---

## Explanation

These two services have a VPC Gateway Endpoint (remember it), all the other ones have an Interface endpoint (powered by Private Link - means a private IP).
