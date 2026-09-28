---
title: Migration, disaster recovery and backup
domain: operations
services: [AWS DMS, AWS SCT, AWS Application Migration Service, AWS Application Discovery Service, AWS Backup]
tags: [migration, disaster-recovery, backup, rto, rpo]
keywords: [dms, sct, application-migration-service, aws-backup, vault-lock, rto, rpo]
---

# Migration, disaster recovery and backup

## Migration tools

| Service | Purpose |
|---|---|
| DMS | migrate/replicate databases with source kept available |
| SCT | convert schema/code for heterogeneous database migration |
| Application Migration Service | replicate and rehost physical/virtual servers to AWS |
| Application Discovery Service | inventory server utilization/dependencies before migration |
| AWS Backup | central policies, scheduling, retention and vaulting for supported AWS resources |

## DR strategies

| Strategy | Cost | RTO/RPO tendency |
|---|---|---|
| Backup and restore | lowest | highest recovery time/data loss potential |
| Pilot light | low-medium | core runs; scale during disaster |
| Warm standby | medium-high | reduced full stack runs; scale out |
| Multi-site / active-active | highest | lowest RTO/RPO |

RTO is maximum acceptable recovery time; RPO is maximum acceptable data loss measured in time. AWS Backup Vault Lock provides WORM-like protection against unwanted backup deletion/changes under its configured mode.
