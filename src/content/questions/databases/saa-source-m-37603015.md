---
id: saa-source-m-37603015
title: "You are looking to perform Online Transaction Processing (OLTP). You would like to use a database that has built-in auto-scaling capabilities and provides you with the maximum number of replicas for its underlying storage. What AWS service do you recommend?"
domain: databases
services: ["RDS", "Aurora", "DynamoDB", "ElastiCache", "Redshift"]
difficulty: medium
type: single
choices:
  - id: a
    text: "Amazon ElastiCache"
  - id: b
    text: "Amazon Neptune"
  - id: c
    text: "Amazon Aurora"
  - id: d
    text: "Amazon RDS"
correct: ["c"]
references: []
tags: ["databases", "imported"]
status: reviewed
lastReviewed: 2026-09-24
---

## Explanation

Amazon Aurora is a MySQL and PostgreSQL-compatible relational database. It features a distributed, fault-tolerant, self-healing storage system that auto-scales up to 128TB per database instance. It delivers high performance and availability with up to 15 low-latency read replicas, point-in-time recovery, continuous backup to Amazon S3, and replication across 3 AZs.

## Why the other options are incorrect

- **Amazon ElastiCache:** Amazon ElastiCache is an in-memory data store, provides you with caching capabilities. It is compatible with Redis and Memcached. It does not support OLTP.
- **Amazon RDS:** Amazon RDS does not have built-in auto-scaling and data replication capabilities. You need to create RDS Read Replicas and enable Multi-AZ.
