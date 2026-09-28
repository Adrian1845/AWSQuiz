---
id: saa-source-m-37595073
title: "You have an application hosted on an ECS Cluster (EC2 Launch Type) where you want your ECS tasks to upload files to an S3 bucket. Which IAM Role for your ECS Tasks should you modify?"
domain: compute
services: ["ECS", "EKS", "Fargate", "ECR"]
difficulty: medium
type: single
choices:
  - id: a
    text: "EC2 Instance Profile"
  - id: b
    text: "ECS Task Role"
correct: ["b"]
references: []
tags: ["containers", "compute", "imported"]
status: reviewed
lastReviewed: 2026-09-24
---

## Explanation

ECS Task Role is the IAM Role used by the ECS task itself. Use when your container wants to call other AWS services like S3, SQS, etc.

## Why the other options are incorrect

- **EC2 Instance Profile:** EC2 Instance Profile is the IAM Role used by the ECS Agent on the EC2 instance to execute ECS-specific actions such as pulling Docker images from ECR and storing the container logs into CloudWatch Logs.
