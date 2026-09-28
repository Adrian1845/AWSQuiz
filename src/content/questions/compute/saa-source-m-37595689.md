---
id: saa-source-m-37595689
title: "You have an e-commerce website where you are using DynamoDB as your database. You are about to enter the Christmas sale and you have a few items which are very popular and you expect that they will be read often. Unfortunately, last year due to the huge traffic you had the ProvisionedThroughputExceededException exception. What would you do to prevent this error from happening again?"
domain: compute
services: ["Lambda", "API Gateway", "Step Functions"]
difficulty: medium
type: single
choices:
  - id: a
    text: "Increase the RCU to a very high value"
  - id: b
    text: "Create a DAX Cluster"
  - id: c
    text: "Migrate the database away from DynamoDB for the time of the sale"
correct: ["b"]
references: []
tags: ["serverless", "compute", "imported"]
status: reviewed
lastReviewed: 2026-09-24
---

## Explanation

DynamoDB Accelerator (DAX) is a fully managed, highly available, in-memory cache for DynamoDB that delivers up to 10x performance improvement. It caches the most frequently used data, thus offloading the heavy reads on hot keys off your DynamoDB table, hence preventing the "ProvisionedThroughputExceededException" exception.

## Why the other options are incorrect

- **Increase the RCU to a very high value:** This is not a good solution to solve the Hot Key problem and it will cost you a lot of money.
- **Migrate the database away from DynamoDB for the time of the sale:** This requires too much effort and it might not deliver the required performance.
