---
id: saa-source-m-37595401
title: "You are migrating your on-premises Docker-based applications to Amazon ECS. You were using Docker Hub Container Image Library as your container image repository. Which is an alternative AWS service which is fully integrated with Amazon ECS?"
domain: compute
services: ["ECS", "EKS", "Fargate", "ECR"]
difficulty: medium
type: single
choices:
  - id: a
    text: "AWS Fargate"
  - id: b
    text: "Elastic Container Registry (ECR)"
  - id: c
    text: "Elastic Kubernetes Service (EKS)"
  - id: d
    text: "Amazon EC2"
correct: ["b"]
references: []
tags: ["containers", "compute", "imported"]
status: reviewed
lastReviewed: 2026-09-24
---

## Explanation

Amazon ECR is a fully managed container registry that makes it easy to store, manage, share, and deploy your container images. ECR is fully integrated with Amazon ECS, allowing easy retrieval of container images from ECR while managing and running containers using ECS.

## Why the other options are incorrect

- **AWS Fargate:** AWS Fargate allows you to run your containers on AWS without managing any servers.
- **Elastic Kubernetes Service (EKS):** Amazon EKS allows you to start, run, and scale Kubernetes applications in AWS or on-premises and run fully-managed EKS clusters on AWS.
- **Amazon EC2:** Amazon EC2 can't be used to store Docker container images.
