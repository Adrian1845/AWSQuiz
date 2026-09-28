---
title: Event-driven file processing
domain: architecture
services: [S3, EventBridge, SNS, SQS, Lambda, ECS, AWS Batch]
tags: [event-driven, asynchronous-processing, serverless, dead-letter-queue]
keywords: [s3, sns, sqs, eventbridge, lambda, dlq, serverless, async]
---

# Event-driven file processing

```mermaid
flowchart LR
  Upload[Client upload] --> Input[S3 input bucket]
  Input -->|event| EB[EventBridge or SNS]
  EB --> Q[SQS buffer]
  Q --> Worker[Lambda or ECS/Batch worker]
  Worker --> Output[S3 output bucket]
  Worker --> DLQ[DLQ on repeated failure]
```

S3 owns the durable file. The event layer distributes/filter-routes the notification. SQS absorbs bursts and permits retries independent of the upload. Pick Lambda for short conversion tasks, ECS/Batch for heavy or long-running work. Keep input and output prefixes/buckets distinct, and make the worker idempotent because events can be delivered more than once.
