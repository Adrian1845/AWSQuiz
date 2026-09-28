---
id: saa-source-m-37594751
title: "You have a Kinesis data stream with 6 shards provisioned. This data stream usually receiving 5 MB/s of data and sending out 8 MB/s. Occasionally, your traffic spikes up to 2x and you get a ProvisionedThroughputExceeded exception. What should you do to resolve the issue?"
domain: integration
services: ["SQS", "SNS", "EventBridge", "Kinesis", "Amazon MQ"]
difficulty: medium
type: single
choices:
  - id: a
    text: "Add more Shards"
  - id: b
    text: "Enable Kinesis Replication"
  - id: c
    text: "Use SQS as a buffer to Kinesis"
correct: ["a"]
references: []
tags: ["decoupling", "integration", "imported"]
status: reviewed
lastReviewed: 2026-09-24
---

## Explanation

The capacity limits of a Kinesis data stream are defined by the number of shards within the data stream. The limits can be exceeded by either data throughput or the number of reading data calls. Each shard allows for 1 MB/s incoming data and 2 MB/s outgoing data. You should increase the number of shards within your data stream to provide enough capacity.

## Why the other options are incorrect

- **Enable Kinesis Replication:** Unfortunately, this feature doesn't exist!
- **Use SQS as a buffer to Kinesis:** This is not a good design.
