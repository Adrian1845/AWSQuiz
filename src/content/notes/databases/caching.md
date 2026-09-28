---
title: ElastiCache and DAX
domain: databases
services: [Amazon ElastiCache, Amazon DynamoDB, DAX]
tags: [caching, redis, memcached, dynamodb]
keywords: [elasticache, redis, memcached, dax, dynamodb, cache-aside, session-store]
---

# ElastiCache and DAX

ElastiCache is managed in-memory caching. It reduces database latency and load, but caching introduces expiration, invalidation, and consistency design.

| Engine | Choose when |
|---|---|
| Redis | replication/failover, persistence, sorted sets, pub/sub, complex data structures, session store |
| Memcached | simple distributed multi-node cache with horizontal scale; no persistence/replication requirement |
| DAX | cache is specifically for DynamoDB API reads/writes |

## Common patterns

- **Lazy loading / cache-aside**: app reads cache, then database on miss, then populates cache. Expect cache misses and stale entries.
- **Session store**: multiple stateless app instances share login session state in Redis so a user can hit any instance.
- **Write-through**: update cache during a database write; helps hit rate but may cache data never read.
