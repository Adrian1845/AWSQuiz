---
title: Amazon DynamoDB
domain: databases
services: [Amazon DynamoDB, DAX, Amazon S3, AWS Lambda]
tags: [nosql, serverless, partition-keys, global-tables]
keywords: [dynamodb, partition-key, sort-key, gsi, lsi, global-tables, dax, serverless]
---

# Amazon DynamoDB

DynamoDB is a serverless, regional NoSQL key-value/document database. Its primary design activity is access-pattern modeling: choose partition key and optional sort key to distribute traffic and enable required queries.

- **On-demand**: unknown/unpredictable workload; pay per request.
- **Provisioned**: known demand; configure capacity and optionally auto scale.
- **GSI**: alternate partition/sort key for a different query pattern; eventually consistent reads only.
- **LSI**: same partition key, alternate sort key; must be declared at table creation.
- **Streams**: ordered per-item change records, commonly consumed by Lambda.
- **Global Tables**: multi-region active-active replication.
- **DAX**: in-memory cache for microsecond DynamoDB reads; it is not a general Redis replacement.

Avoid scans for routine application queries. Prevent hot partitions by choosing high-cardinality, evenly distributed partition keys or sharding a hot key.
