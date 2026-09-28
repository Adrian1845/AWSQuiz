---
title: Infrastructure, management and cost
domain: operations
services: [AWS CloudFormation, AWS Systems Manager, AWS Backup, Cost Explorer, AWS Budgets, Cost Anomaly Detection]
tags: [infrastructure-as-code, operations, cost-optimization, governance]
keywords: [cloudformation, systems-manager, session-manager, aws-backup, cost-explorer, budgets, tags]
---

# Infrastructure, management and cost

- **CloudFormation**: declarative infrastructure as code. A stack groups resources so creation/update/rollback are managed consistently. Use a service role to constrain what CloudFormation can do.
- **Systems Manager**: fleet operations. Session Manager gives audited shell access without inbound SSH; Run Command executes commands; Patch Manager and Maintenance Windows coordinate upkeep.
- **AWS Backup**: central backup plans and vault governance, rather than per-service scripts.
- **Cost Explorer / Budgets / Cost Anomaly Detection**: analyze, alert on, and forecast spend; they do not enforce an automatic hard spending cap.

Tag resources consistently for cost allocation and ownership. Use CloudFormation/Infrastructure as Code so environments are repeatable and reviewable.
