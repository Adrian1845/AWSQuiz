---
title: Database selection
domain: databases
services: [Amazon RDS, Amazon Aurora, Amazon DynamoDB, Amazon ElastiCache, Amazon Redshift, OpenSearch Service]
tags: [database-selection, service-selection, relational-database, nosql]
keywords: [rds, aurora, dynamodb, elasticache, redshift, opensearch, database-selection]
---

# Database selection

| Requirement | Strong starting point |
|---|---|
| SQL, joins, managed relational engine | RDS / Aurora |
| global-scale key-value/document with predictable key access | DynamoDB |
| graph relationships / traversals | Neptune |
| immutable ledger/audit chain | QLDB |
| time series | Timestream |
| warehouse / OLAP | Redshift |
| search / log analytics | OpenSearch Service |
| cache/session/low-latency in-memory data | ElastiCache |

First determine the data model and access patterns; "fast" alone is not a database selection criterion. Cache a source of truth instead of treating a cache as a durable primary database unless the service semantics explicitly support it.
