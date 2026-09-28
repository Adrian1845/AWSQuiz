---
title: OpenSearch and QuickSight
domain: data-and-analytics
services: [OpenSearch Service, Amazon QuickSight, Kinesis Data Firehose, Amazon S3]
tags: [search, log-analytics, business-intelligence, dashboards]
keywords: [opensearch, quicksight, search, logs, dashboards, spice, firehose]
---

# OpenSearch and QuickSight

## Amazon OpenSearch Service

OpenSearch Service is managed search and analytics for indexed JSON/document/log data. It supports full-text search, near-real-time dashboards, aggregations, and log exploration. Typical ingestion comes from Kinesis Data Firehose, Logstash/agents, application writes, or ETL pipelines.

It is not a relational warehouse and not a general replacement for S3. Design index mappings, shard counts, retention/rollover, access control, and ingestion failure handling. For durable raw logs, keep an S3 archive even when OpenSearch supplies fast search.

## Amazon QuickSight

QuickSight is managed business intelligence: dashboards, visualizations, and embedding. It can query sources directly or use SPICE, its in-memory engine, to accelerate dashboard interaction and reduce repeated source queries. It is a presentation/analysis layer, not the storage system of record.
