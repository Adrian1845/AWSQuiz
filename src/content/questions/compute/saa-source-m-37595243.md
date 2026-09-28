---
id: saa-source-m-37595243
title: "You're planning to migrate a WordPress website running on Docker containers from on-premises to AWS. You have decided to run the application in an ECS Cluster, but you want your docker containers to access the same WordPress website content such as website files, images, videos, etc. What do you recommend to achieve this?"
domain: compute
services: ["ECS", "EKS", "Fargate", "ECR"]
difficulty: medium
type: single
choices:
  - id: a
    text: "Mount an EFS volume"
  - id: b
    text: "Mount an EBS volume"
  - id: c
    text: "Use an EC2 Instance Store"
correct: ["a"]
references: []
tags: ["containers", "compute", "imported"]
status: reviewed
lastReviewed: 2026-09-24
---

## Explanation

EFS volume can be shared between different EC2 instances and different ECS Tasks. It can be used as a persistent multi-AZ shared storage for your containers.

## Why the other options are incorrect

- **Mount an EBS volume:** This can be used when all your ECS tasks run on the same EC2 instance. It's not suitable when your tasks are spread across multiple EC2 instances and can't be used with AWS Fargate.
- **Use an EC2 Instance Store:** EC2 Instance Store can't be shared between different EC2 instances.
