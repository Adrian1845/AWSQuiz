---
title: "Managed compute: Elastic Beanstalk, Batch and App Runner"
domain: compute
services: [Elastic Beanstalk, AWS Batch, AWS App Runner, AWS Lambda]
tags: [managed-compute, application-platform, batch-processing, containers]
keywords: [elastic-beanstalk, batch, app-runner, web-app, containers]
---

# Managed compute: Elastic Beanstalk, Batch and App Runner

| Service | Use it for | Key idea |
|---|---|---|
| Elastic Beanstalk | conventional web app deployment | deploy code; AWS provisions the surrounding EC2/ELB/ASG stack |
| AWS Batch | large queues of finite jobs | scheduler chooses compute capacity, including Spot, for jobs with start/end |
| App Runner | simple container/source-code web service | managed build/deploy/runtime with low infrastructure involvement |

**Batch vs Lambda:** Batch accepts containerized jobs with no Lambda-style short execution model and can use compute-heavy or multi-node resources. Lambda is the quick serverless reaction for an event and is operationally simpler for short tasks.
