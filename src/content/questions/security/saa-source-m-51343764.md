---
id: saa-source-m-51343764
title: "An online-payment company is using AWS to host its infrastructure. The frontend is created using VueJS and is hosted on an S3 bucket and the backend is developed using PHP and is hosted on EC2 instances in an Auto Scaling Group. As their customers are worldwide, they use both CloudFront and Aurora Global database to implement multi-region deployments to provide the lowest latency and provide availability, and resiliency. A new feature required which gives customers the ability to store data encrypted on the database and this data must not be disclosed even by the company admins. The data should be encrypted on the client side and stored in an encrypted format. What do you recommend to implement this?"
domain: security
services: ["IAM", "KMS", "Cognito", "WAF", "Shield", "GuardDuty"]
difficulty: medium
type: single
choices:
  - id: a
    text: "Using Aurora Client-side Encryption and KMS Multi-region Keys"
  - id: b
    text: "Using Lambda Client-side Encryption and KMS Multi-region Keys"
  - id: c
    text: "Using Aurora Client-side Encryption and CloudHSM"
  - id: d
    text: "Using Lambda Client-side Encryption and CloudHSM"
correct: ["a"]
references: []
tags: ["security", "imported"]
status: reviewed
lastReviewed: 2026-09-24
---

## Explanation

The correct answer is **Using Aurora Client-side Encryption and KMS Multi-region Keys**.
