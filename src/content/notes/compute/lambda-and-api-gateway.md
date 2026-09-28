---
title: Lambda and API Gateway
domain: compute
services: [AWS Lambda, Amazon API Gateway, CloudFront, Amazon ECS, AWS Fargate, AWS Batch]
tags: [serverless, event-driven, api, concurrency]
keywords: [lambda, api-gateway, serverless, api, concurrency, cold-start, sqs, eventbridge]
---

# Lambda and API Gateway

## Lambda

Lambda runs event-driven code without managing servers. Configure memory (which affects CPU), timeout, concurrency, IAM execution role, VPC networking when needed, and event source behavior. Use it for short-lived, stateless, event-oriented workloads.

- **Synchronous invocation**: caller waits; failures return to caller/integration.
- **Asynchronous invocation**: Lambda queues the event and retries; use destinations or DLQ for failure handling.
- **Event source mapping**: Lambda polls SQS, Kinesis, or DynamoDB Streams; tune batch and failure behavior.
- **Reserved concurrency** protects/downsizes a function; provisioned concurrency reduces cold-start impact.

## API Gateway

API Gateway provides managed HTTP APIs, REST APIs, and WebSocket APIs. It handles authorization, throttling, request validation/transformation, stages, caching, and integrations with Lambda or AWS services. Put CloudFront in front when global edge caching/delivery is needed.

## Decision signal

Choose Lambda for bounded execution and simple event reaction; choose ECS/Fargate for containerized long-running services; choose Batch for queued compute jobs that need arbitrary runtime duration or resources.
