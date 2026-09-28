---
title: Amazon Redshift
domain: data-and-analytics
services: [Amazon Redshift, Amazon S3, Amazon Athena, Amazon RDS, OpenSearch Service]
tags: [data-warehouse, analytics, olap, business-intelligence]
keywords: [redshift, data-warehouse, olap, spectrum, copy, s3, bi]
---

# Amazon Redshift

Redshift is a managed columnar analytical data warehouse for OLAP: large scans, aggregations, reporting, and BI across structured data. It is not the default transactional database for high-frequency single-row application updates.

- Load data from S3 efficiently with `COPY`; integrate streaming data through Firehose or streaming ingestion patterns.
- Redshift Spectrum lets Redshift query data in S3 using external tables/catalog metadata, so colder/large data need not all be loaded into local warehouse storage.
- Use distribution style/keys to place data that joins together efficiently; use sort keys to reduce scanned blocks. These are warehouse physical-design decisions, unlike RDS indexes alone.
- Redshift can scale workload capacity with its applicable concurrency/scaling features, but data modeling and workload management still matter.

**Choose Redshift** for organization-scale historical analytics and BI. Choose Athena for serverless S3 queries with intermittent/ad-hoc use. Choose RDS/Aurora for OLTP. Choose OpenSearch when the primary interaction is full-text/log search, not relational analytics.
