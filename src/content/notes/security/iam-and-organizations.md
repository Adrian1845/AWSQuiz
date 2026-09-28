---
title: IAM and Organizations
domain: security
services: [AWS IAM, IAM Identity Center, AWS Organizations, AWS CloudTrail, IAM Access Analyzer]
tags: [identity-and-access-management, governance, least-privilege, cross-account]
keywords: [iam, iam-role, identity-center, organizations, scp, access-analyzer, least-privilege]
---

# IAM and Organizations

IAM is global identity and access management. A policy evaluation can involve identity policies, resource policies, permissions boundaries, session policies, SCPs, and explicit denies. Explicit deny wins.

## Principal choices

| Principal / mechanism | Use |
|---|---|
| IAM user | legacy long-lived human/program identity; minimize use |
| IAM group | assign common permissions to IAM users |
| IAM role | temporary credentials for AWS services, workloads, federated users, cross-account access |
| Identity Center | workforce SSO across accounts/apps |
| Resource policy | grant access at the resource, including cross-account access where supported |

Root credentials are only for account-level tasks that require them; protect them with MFA. Prefer roles and temporary credentials over access keys. Use least privilege and CloudTrail/Credential Report/Access Analyzer to audit.

Organizations centralizes accounts, consolidated billing, and SCP guardrails. An SCP sets the maximum permission boundary for member accounts; it does not grant a permission.
