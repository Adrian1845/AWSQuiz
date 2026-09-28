---
title: Security services
domain: security
services: [AWS WAF, AWS Shield, Amazon GuardDuty, Amazon Inspector, Amazon Macie, AWS Security Hub, AWS Config]
tags: [threat-detection, web-security, compliance, security-posture]
keywords: [waf, shield, guardduty, inspector, macie, security-hub, config, ddos]
---

# Security services

| Service | Detect / protect | Typical trigger |
|---|---|---|
| WAF | HTTP(S) requests | block IPs, SQLi/XSS patterns, rate-based rules at CloudFront/ALB/API Gateway |
| Shield | DDoS | managed DDoS defense; Advanced for enhanced protection/support |
| GuardDuty | suspicious activity | threat detection from logs/events |
| Inspector | workload vulnerabilities/exposure | EC2/ECR/Lambda vulnerability management |
| Macie | sensitive data in S3 | discover/classify PII |
| Security Hub | findings aggregation | central security posture |
| AWS Config | configuration history/rules | compliance/change tracking |

WAF is application-layer filtering, not a replacement for network segmentation. Security Hub aggregates findings; it is not the detector that discovers every threat itself.
