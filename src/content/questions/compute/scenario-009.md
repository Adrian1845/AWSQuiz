---
id: saa-scenario-009
title: "A team needs to run container tasks and does not want to patch, scale, or operate EC2 worker nodes. The team does not require Kubernetes APIs. Which compute option is best?"
domain: compute
services: [Amazon ECS on]
difficulty: medium
type: single
choices:
  - id: a
    text: Amazon EKS on EC2
  - id: b
    text: Amazon ECS on AWS Fargate
  - id: c
    text: Amazon EC2 Auto Scaling
  - id: d
    text: AWS Batch on managed EC2
correct: [b]
references: [{ note: containers }]
tags: [ecs,fargate,containers,serverless, scenario-based]
status: reviewed
lastReviewed: 2026-09-16
---

## Explanation

**Amazon ECS on AWS Fargate** directly meets the stated technical and operational requirements. The alternatives do not provide the required behavior or are not designed for this use case.

