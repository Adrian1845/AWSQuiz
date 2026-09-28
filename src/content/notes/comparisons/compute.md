---
title: Compute comparisons
domain: comparisons
services: [EC2, ECS, EKS, Fargate, Lambda, AWS Batch, Elastic Beanstalk, Spot Fleet]
tags: [compute, service-selection, containers, serverless]
keywords: [ec2, ecs, eks, fargate, lambda, batch, elastic-beanstalk, app-runner, spot, serverless]
---

# Compute comparisons

| Prompt clue | Prefer | Why |
|---|---|---|
| manage OS, custom agent, special hardware | EC2 | VM control |
| containers without Kubernetes requirement | ECS | AWS-native orchestration |
| Kubernetes APIs/tools required | EKS | managed Kubernetes |
| containers but no node management | Fargate | serverless task/pod compute |
| short event code | Lambda | event-driven serverless execution |
| finite jobs, long/custom runtime | Batch | queue-aware container job scheduler |
| code deploy to a conventional web stack | Elastic Beanstalk | managed app platform |
| low-cost flexible capacity across several Spot pools | Spot Fleet | target capacity with a Spot allocation strategy |

The question's operational responsibility clue is usually more important than whether the application is "web" or "containerized."
