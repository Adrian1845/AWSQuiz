---
id: saa-source-m-37603803
title: "You have created a Customer-managed CMK in KMS that you use to encrypt both S3 buckets and EBS snapshots. Your company policy mandates that your encryption keys be rotated every 6 months. What should you do?"
domain: security
services: ["IAM", "KMS", "Cognito", "WAF", "Shield", "GuardDuty"]
difficulty: medium
type: single
choices:
  - id: a
    text: "Re-configure your KMS CMK and enable Automatic Key Rotation, and configure the Retention Period with 180 days"
  - id: b
    text: "Use AWS Managed Keys as they are automatically rotated by AWS every 3 months"
  - id: c
    text: "Rotate the KMS CMK manually. Create a new KMS CMK and use Key Aliases to reference the new KMS CMK. Keep the old KMS CMK so you can decrypt the old data"
correct: ["a"]
references: []
tags: ["security", "imported"]
status: reviewed
lastReviewed: 2026-09-24
---

## Explanation

The correct answer is **Re-configure your KMS CMK and enable Automatic Key Rotation, and configure the Retention Period with 180 days**.

## Why the other options are incorrect

- **Rotate the KMS CMK manually. Create a new KMS CMK and use Key Aliases to reference the new KMS CMK. Keep the old KMS CMK so you can decrypt the old data:** It is better to use Automatic Key Rotation and configure Retention Period
