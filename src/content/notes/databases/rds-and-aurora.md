---
title: Amazon RDS and Aurora
domain: databases
services: [Amazon RDS, Amazon Aurora, Amazon EC2, Amazon VPC]
tags: [relational-database, high-availability, read-replicas, backups]
keywords: [rds, aurora, multi-az, read-replica, backups, relational-database]
---

# Amazon RDS and Aurora

RDS manages relational database engines and operational tasks such as provisioning, patching, backups, and point-in-time restore. It is for SQL/relational workloads where managed service is preferred over operating a database on EC2.

| Feature | Read Replica | Multi-AZ standby |
|---|---|---|
| Primary purpose | read scale, reporting, optionally promotion | high availability / DR |
| Replication | asynchronous | synchronous |
| Reads | application can use replica endpoint | standby is not a read target in the usual RDS Multi-AZ pattern |
| Failover | manual/promote as design dictates | automatic to same DNS endpoint |

Aurora is a cloud-native relational engine compatible with MySQL or PostgreSQL. Its shared distributed storage spans AZs; use writer and reader endpoints. Aurora Replicas provide read scale and faster failover; Aurora Global Database supports cross-region reads and disaster recovery.

## RDS operational model

RDS removes host provisioning, operating-system patching, automated backup orchestration, and most replication mechanics. You still own engine/schema choices, indexes, queries, parameter configuration, access control, capacity selection, maintenance-window choices, and recovery testing. RDS runs inside a VPC and is reached through a DB endpoint; it is not a public internet database by default.

**Storage autoscaling** raises allocated storage when RDS approaches a configured threshold. It is protection against an unexpected growth event, not a substitute for capacity planning. Read replicas are asynchronous and can lag; do not send a read-your-write request to a replica unless your application tolerates that lag.

## Aurora detail

- An Aurora cluster has one writer and up to multiple read replicas. The **cluster/writer endpoint** follows the writer after failover; the **reader endpoint** load balances read-only connections across replicas; a **custom endpoint** selects a subset, useful for isolating reporting traffic.
- Aurora storage is replicated across multiple AZs independently from compute instances. This differs from a conventional RDS DB instance with a separate synchronous standby.
- Aurora Serverless is an Aurora capacity option for variable/intermittent workloads; it does not remove relational data modeling or connection management concerns.
- Aurora Global Database replicates to secondary regions for global reads and DR. Cross-region replication is asynchronous, so exact RPO depends on replication state.
- Aurora Machine Learning can call supported ML services from SQL for predictions; do not mistake that integration for hosting/training a general database model inside Aurora.

## Backup notes

Automated backups enable point-in-time recovery within retention; manual snapshots persist until deleted. Restore creates a new DB resource, so plan cutover and connection changes.

## Security and failure notes

Encryption at rest for a DB instance/cluster uses KMS and is chosen at creation. To encrypt an existing unencrypted database, snapshot it, copy/restore it encrypted, then plan cutover. TLS protects client connections in transit. Security groups control network admission; IAM database authentication can remove static database password use for supported engines. Export audit/engine logs to CloudWatch Logs when long retention/search is required.
