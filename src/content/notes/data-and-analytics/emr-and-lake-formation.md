---
title: EMR and Lake Formation
domain: data-and-analytics
services: [Amazon EMR, AWS Lake Formation, AWS Glue, Amazon Athena, Amazon Redshift]
tags: [big-data, data-lake, governance, spark]
keywords: [emr, spark, hadoop, lake-formation, glue-catalog, athena, redshift]
---

# EMR and Lake Formation

## Amazon EMR

EMR runs big-data frameworks such as Apache Spark, Hadoop, Hive, and HBase on managed EC2 clusters or EMR Serverless. Choose it when you need framework-level flexibility, custom libraries, large distributed processing, or fine control that a Glue job does not provide. Store durable input/output in S3 so cluster nodes are disposable; use Spot for interruption-tolerant task capacity where appropriate.

## AWS Lake Formation

Lake Formation helps build/govern a data lake on S3. It works with the Glue Data Catalog and provides centralized fine-grained permissions to data/catalog objects for analytics services. It is about data-lake setup, catalog/governance, and access control; it is not itself the SQL query engine or ETL compute engine.

## Choice guide

| Need | Start with |
|---|---|
| query S3 files with SQL, no cluster | Athena |
| serverless ETL/catalog | Glue |
| customizable Spark/Hadoop workload | EMR |
| govern data-lake tables/permissions | Lake Formation |
| warehouse BI performance | Redshift |
