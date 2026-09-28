---
title: Amazon Kinesis
domain: integration
services: [Amazon Kinesis Data Streams, Amazon Data Firehose, Amazon Managed Service for Apache Flink, Amazon S3, Amazon Redshift, OpenSearch Service]
tags: [streaming, real-time-processing, data-ingestion, shards]
keywords: [kinesis, data-streams, firehose, flink, streaming, shards, real-time]
---

# Amazon Kinesis

| Service | Data shape / operation | Use when |
|---|---|---|
| Kinesis Data Streams | ordered stream shards, consumer applications | real-time custom processing / replay window |
| Kinesis Data Firehose | managed delivery stream | load streaming data into S3, Redshift, OpenSearch, etc. with minimal consumer code |
| Kinesis Data Analytics | SQL/Flink stream processing | derive real-time aggregates/transforms |

The partition key determines a Data Streams shard and order is only guaranteed within that shard. Avoid hot keys. Firehose is delivery-oriented, not a general replayable stream for multiple independent consumers.
