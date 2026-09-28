---
id: saa-source-m-51343790
title: "You have generated a public certificate using LetsEncrypt and uploaded it to the ACM so you can use and attach to an Application Load Balancer that forwards traffic to EC2 instances. As this certificate is generated outside of AWS, it does not support the automatic renewal feature. How would you be notified 30 days before this certificate expires so you can manually generate a new one?"
domain: security
services: ["IAM", "KMS", "Cognito", "WAF", "Shield", "GuardDuty"]
difficulty: medium
type: single
choices:
  - id: a
    text: "Configure ACM to send notifications by linking it to 3rd party certificate provider LetsEncrypt"
  - id: b
    text: "Configure EventBridge for Daily Expiration Events from ACM to invoke SNS notifications to your email"
  - id: c
    text: "Configure EventBridge for Monthly Expiration Events from ACM to invoke SNS notifications to your email"
  - id: d
    text: "Configure CloudWatch Alarms for Daily Expiration Events from ACM to invoke SNS notifications to your email"
correct: ["b"]
references: []
tags: ["security", "imported"]
status: reviewed
lastReviewed: 2026-09-24
---

## Explanation

The correct answer is **Configure EventBridge for Daily Expiration Events from ACM to invoke SNS notifications to your email**.
