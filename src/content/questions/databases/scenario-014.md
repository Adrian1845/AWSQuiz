---
id: saa-scenario-014
title: "A DynamoDB table has uneven traffic because a small number of partition keys receive most requests. What design change best addresses this issue?"
domain: databases
services: [Use a higher-cardinality]
difficulty: medium
type: single
choices:
  - id: a
    text: Add a local secondary index
  - id: b
    text: Enable DynamoDB Streams only
  - id: c
    text: Use a higher-cardinality partition-key design to distribute requests
  - id: d
    text: Store the table on EBS
correct: [c]
references: [{ note: dynamodb }]
tags: [dynamodb,partition-key,hot-partition,scalability, scenario-based]
status: reviewed
lastReviewed: 2026-09-16
---

## Explanation

**Use a higher-cardinality partition-key design to distribute requests** directly meets the stated technical and operational requirements. The alternatives do not provide the required behavior or are not designed for this use case.

