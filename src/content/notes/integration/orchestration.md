---
title: AWS Step Functions
domain: integration
services: [AWS Step Functions, AWS Lambda, Amazon ECS, AWS Batch]
tags: [orchestration, workflows, serverless, retries]
keywords: [step-functions, workflows, standard-workflow, express-workflow, lambda, retries, serverless]
---

# AWS Step Functions

Step Functions coordinates workflows using states, retries, catches, branching, parallelism, and service integrations. Use it when a business process is visible, multi-step, and needs durable orchestration; do not hide workflow state inside a single Lambda.

- **Standard**: durable, auditable, long-running workflows; exactly-once workflow execution semantics.
- **Express**: high-volume, shorter-lived event processing; at-least-once asynchronous or at-most-once synchronous behavior depending on mode.

Pair it with Lambda/ECS/Batch for work, not as a replacement for those compute engines.
