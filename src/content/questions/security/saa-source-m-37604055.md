---
id: saa-source-m-37604055
title: "Which AWS service allows you to centrally manage EC2 Security Groups and AWS Shield Advanced across all AWS accounts in your AWS Organization?"
domain: security
services: ["IAM", "KMS", "Cognito", "WAF", "Shield", "GuardDuty"]
difficulty: medium
type: single
choices:
  - id: a
    text: "AWS Shield"
  - id: b
    text: "AWS GuardDuty"
  - id: c
    text: "AWS Config"
  - id: d
    text: "AWS Firewall Manager"
correct: ["d"]
references: []
tags: ["security", "imported"]
status: reviewed
lastReviewed: 2026-09-24
---

## Explanation

AWS Firewall Manager is a security management service that allows you to centrally configure and manage firewall rules across your accounts and applications in AWS Organizations. It is integrated with AWS Organizations so you can enable AWS WAF rules, AWS Shield Advanced protection, security groups, AWS Network Firewall rules, and Amazon Route 53 Resolver DNS Firewall rules.
