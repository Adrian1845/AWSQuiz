---
id: saa-source-m-37602821
title: "You have a lot of static files stored in an S3 bucket that you want to distribute globally to your users. Which AWS service should you use?"
domain: architecture
services: ["Lambda", "API Gateway", "Kinesis", "EventBridge"]
difficulty: medium
type: single
choices:
  - id: a
    text: "S3 Cross-Region Replication"
  - id: b
    text: "Amazon CloudFront"
  - id: c
    text: "Amazon Route 53"
  - id: d
    text: "API Gateway"
correct: ["b"]
references: []
tags: ["serverless", "architecture", "imported"]
status: reviewed
lastReviewed: 2026-09-24
---

## Explanation

Amazon CloudFront is a fast content delivery network (CDN) service that securely delivers data, videos, applications, and APIs to customers globally with low latency, high transfer speeds. This is a perfect use case for Amazon CloudFront.

## Why the other options are incorrect

- **S3 Cross-Region Replication:** S3 CRR enables automatic, asynchronous copying of objects across S3 buckets. This would work but it would be expensive as you'll have multiple copies of data in different S3 buckets around the globe.
- **Amazon Route 53:** Amazon Route 53 is a highly available and scalable Domain Name System (DNS) service.
- **API Gateway:** Amazon API Gateway is a fully managed service that makes it easy to create, publish, maintain, monitor, and secure APIs at any scale. You can create REST APIs and WebSocket APIs. It helps you expose dynamic content, not static content from S3.
