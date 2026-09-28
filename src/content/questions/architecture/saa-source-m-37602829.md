---
id: saa-source-m-37602829
title: "You have created a DynamoDB table in ap-northeast-1 and would like to make it available in eu-west-1, so you decided to create a DynamoDB Global Table. What needs to be enabled first before you create a DynamoDB Global Table?"
domain: architecture
services: ["Lambda", "API Gateway", "Kinesis", "EventBridge"]
difficulty: medium
type: single
choices:
  - id: a
    text: "DynamoDB Streams"
  - id: b
    text: "DynamoDB DAX"
  - id: c
    text: "DynamoDB Versioning"
  - id: d
    text: "DynamoDB Backups"
correct: ["a"]
references: []
tags: ["serverless", "architecture", "imported"]
status: reviewed
lastReviewed: 2026-09-24
---

## Explanation

DynamoDB Streams enable DynamoDB to get a changelog and use that changelog to replicate data across replica tables in other AWS Regions.

## Why the other options are incorrect

- **DynamoDB DAX:** Amazon DynamoDB Accelerator (DAX) is a fully managed, highly available, in-memory cache for DynamoDB that delivers up to a 10x performance improvement – from milliseconds to microseconds – even at millions of requests per second. DAX does all the heavy lifting required to add in-memory acceleration to your DynamoDB tables, without requiring developers to manage cache invalidation, data population, or cluster management.
- **DynamoDB Versioning:** There's no such feature.
- **DynamoDB Backups:** Amazon DynamoDB provides the on-demand backup capability to create full backups of your tables for long-term retention and archival for regulatory compliance needs.
