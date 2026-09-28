---
id: saa-source-m-37602799
title: "The following AWS services have an out of the box caching feature, EXCEPT ................."
domain: architecture
services: ["Lambda", "API Gateway", "Kinesis", "EventBridge"]
difficulty: medium
type: single
choices:
  - id: a
    text: "API Gateway"
  - id: b
    text: "Lambda"
  - id: c
    text: "DynamoDB"
correct: ["b"]
references: []
tags: ["serverless", "architecture", "imported"]
status: reviewed
lastReviewed: 2026-09-24
---

## Explanation

Lambda does not have an out-of-the-box caching feature.

## Why the other options are incorrect

- **API Gateway:** You can enable API caching in Amazon API Gateway to cache your endpoint's responses. With caching, you can reduce the number of calls made to your endpoint and also improve the latency of requests to your API. When you enable caching for a stage, API Gateway caches responses from your endpoint for a specified time-to-live (TTL) period, in seconds. API Gateway then responds to the request by looking up the endpoint response from the cache instead of making a request to your endpoint.
- **DynamoDB:** Amazon DynamoDB Accelerator (DAX) is a fully managed, highly available, in-memory cache for DynamoDB that delivers up to a 10x performance improvement – from milliseconds to microseconds – even at millions of requests per second. DAX does all the heavy lifting required to add in-memory acceleration to your DynamoDB tables, without requiring developers to manage cache invalidation, data population, or cluster management.
