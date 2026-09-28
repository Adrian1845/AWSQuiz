---
id: saa-source-m-37602857
title: "You are running a photo-sharing website where your images are downloaded from all over the world. Every month you publish a master pack of beautiful mountain images that are over 15 GB in size. The content is currently hosted on an Elastic File System (EFS) file system and distributed by an Application Load Balancer and a set of EC2 instances. Each month, you are experiencing very high traffic which increases the load on your EC2 instances and increases network costs. What do you recommend to reduce EC2 load and network costs without refactoring your website?"
domain: architecture
services: ["Lambda", "API Gateway", "Kinesis", "EventBridge"]
difficulty: medium
type: single
choices:
  - id: a
    text: "Hosts the master pack into S3"
  - id: b
    text: "Enable Application Load Balancer Caching"
  - id: c
    text: "Scale up the EC2 instances"
  - id: d
    text: "Create a CloudFront Distribution"
correct: ["d"]
references: []
tags: ["serverless", "architecture", "imported"]
status: reviewed
lastReviewed: 2026-09-24
---

## Explanation

Amazon CloudFront is a fast content delivery network (CDN) service that securely delivers data, videos, applications, and APIs to customers globally with low latency, high transfer speeds. Amazon CloudFront can be used in front of an Application Load Balancer.

## Why the other options are incorrect

- **Hosts the master pack into S3:** This would work, but it will require some kind of application refactoring. And you still may have high network costs.
- **Enable Application Load Balancer Caching:** This feature does not exist.
- **Scale up the EC2 instances:** This would include higher costs for EC2 instances, and you still have high network costs.
