---
title: Security and resilience comparisons
domain: comparisons
services: [IAM, IAM Identity Center, AWS Organizations, Secrets Manager, KMS, AWS WAF, CloudWatch, CloudTrail, AWS Config]
tags: [security, resilience, service-selection, governance]
keywords: [iam, identity-center, scp, kms, secrets-manager, waf, nacl, cloudwatch, cloudtrail, config]
---

# Security and resilience comparisons

| Need | Service / pattern |
|---|---|
| temporary AWS workload permission | IAM role |
| workforce SSO across accounts | IAM Identity Center |
| account-wide maximum guardrail | Organizations SCP |
| secret rotation | Secrets Manager |
| encrypted data-key control/audit | KMS |
| HTTP request filtering | WAF |
| network subnet stateless deny | NACL |
| instance/resource stateful allow policy | Security group |
| configuration compliance history | AWS Config |
| API audit | CloudTrail |
| server/app metrics and logs | CloudWatch |
| API caller and control-plane audit | CloudTrail |
| resource configuration timeline / compliance | AWS Config |
| highest DR readiness | multi-site / active-active |
