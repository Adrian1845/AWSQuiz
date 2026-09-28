---
id: saa-source-m-37603797
title: "You have an AMI that has an encrypted EBS snapshot using KMS CMK. You want to share this AMI with another AWS account. You have shared the AMI with the desired AWS account, but the other AWS account still can't use it. How would you solve this problem?"
domain: security
services: ["IAM", "KMS", "Cognito", "WAF", "Shield", "GuardDuty"]
difficulty: medium
type: single
choices:
  - id: a
    text: "The other AWS account needs to logout and login again to refresh its credentials"
  - id: b
    text: "You need to share the KMS CMK used to encrypt the AMI with the other AWS account"
  - id: c
    text: "You can't share an AMI that has an encrypted EBS snapshot"
correct: ["b"]
references: []
tags: ["security", "imported"]
status: reviewed
lastReviewed: 2026-09-24
---

## Explanation

The correct answer is **You need to share the KMS CMK used to encrypt the AMI with the other AWS account**.
