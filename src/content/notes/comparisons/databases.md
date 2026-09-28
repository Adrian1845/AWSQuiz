---
title: Database and cache comparisons
domain: comparisons
services: [Amazon RDS, Aurora, DynamoDB, Amazon ElastiCache, DAX, RDS Proxy]
tags: [databases, caching, service-selection, high-availability]
keywords: [rds, aurora, dynamodb, elasticache, redis, memcached, dax, rds-proxy]
---

# Database and cache comparisons

| Need | Prefer | Not the same as |
|---|---|---|
| managed SQL | RDS/Aurora | DynamoDB |
| relational reads scale | RDS read replicas / Aurora readers | Multi-AZ standby |
| relational automatic HA failover | Multi-AZ / Aurora HA | read replica |
| predictable key access at scale | DynamoDB | RDS |
| DynamoDB microsecond cache | DAX | Redis |
| sessions/complex data structures/cache | Redis | Memcached |
| simple horizontally sharded cache | Memcached | Redis HA/persistence |
| serverless burst risks DB connection exhaustion | RDS Proxy | ElastiCache |
