---
id: saa-source-m-37603031
title: "You have a set of files, 100MB each, that you want to store in a reliable and durable key-value store. Which AWS service do you recommend?"
domain: databases
services: ["RDS", "Aurora", "DynamoDB", "ElastiCache", "Redshift"]
difficulty: medium
type: single
choices:
  - id: a
    text: "Amazon Aurora"
  - id: b
    text: "Amazon S3"
  - id: c
    text: "Amazon DynamoDB"
  - id: d
    text: "Amazon ElastiCache"
correct: ["b"]
references: []
tags: ["databases", "imported"]
status: reviewed
lastReviewed: 2026-09-24
---

## Explanation

Amazon S3 is indeed a key-value store! (where the key is the full path of the object in the bucket)

## Why the other options are incorrect

- **Amazon DynamoDB:** Amazon DynamoDB can not be used to store big objects. The maximum item size in DynamoDB is 400KB.
- **Amazon ElastiCache:** Amazon ElastiCache is a fully managed in-memory data store, compatible with Redis or Memcached. It can not be used to store big objects, in addition to it is not durable.
