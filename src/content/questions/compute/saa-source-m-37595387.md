---
id: saa-source-m-37595387
title: "You are deploying an application on an ECS Cluster made of EC2 instances. Currently, the cluster is hosting one application that is issuing API calls to DynamoDB successfully. Upon adding a second application, which issues API calls to S3, you are getting authorization issues. What should you do to resolve the problem and ensure proper security?"
domain: compute
services: ["ECS", "EKS", "Fargate", "ECR"]
difficulty: medium
type: single
choices:
  - id: a
    text: "Edit the EC2 instance role to add permissions to S3"
  - id: b
    text: "Create an IAM task role for the new application"
  - id: c
    text: "Enable the Fargate mode"
  - id: d
    text: "Edit the S3 bucket policy to allow the ECS task"
correct: ["b"]
references: []
tags: ["containers", "compute", "imported"]
status: reviewed
lastReviewed: 2026-09-24
---

## Explanation

The correct answer is **Create an IAM task role for the new application**.

## Why the other options are incorrect

- **Edit the EC2 instance role to add permissions to S3:** This would allow the first application to access S3 as well, which is a security risk.
