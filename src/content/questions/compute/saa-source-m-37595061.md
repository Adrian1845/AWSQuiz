---
id: saa-source-m-37595061
title: "You have multiple Docker-based applications hosted on-premises that you want to migrate to AWS. You don't want to provision or manage any infrastructure; you just want to run your containers on AWS. Which AWS service should you choose?"
domain: compute
services: ["ECS", "EKS", "Fargate", "ECR"]
difficulty: medium
type: single
choices:
  - id: a
    text: "Elastic Container Service (ECS) in EC2 Launch Mode"
  - id: b
    text: "Elastic Container Registry (ECR)"
  - id: c
    text: "AWS Fargate on ECS"
correct: ["c"]
references: []
tags: ["containers", "compute", "imported"]
status: reviewed
lastReviewed: 2026-09-24
---

## Explanation

AWS Fargate allows you to run your containers on AWS without managing any servers.

## Why the other options are incorrect

- **Elastic Container Service (ECS) in EC2 Launch Mode:** Amazon ECS allows you to run your containers on AWS but you must provision and maintain the EC2 instances where your containers will be run on.
- **Elastic Container Registry (ECR):** Amazon ECR is a fully managed container registry that makes it easy to store, manage, share, and deploy your container images. It won't help in running your Docker-based applications.
