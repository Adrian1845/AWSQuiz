---
id: saa-source-m-37604525
title: "As part of your Disaster Recovery strategy, you would like to make sure your entire infrastructure is code (IaC) so that you can easily re-deploy it in any AWS region. Which AWS service do you recommend?"
domain: operations
services: ["CloudFormation", "Systems Manager", "AWS Organizations"]
difficulty: medium
type: single
choices:
  - id: a
    text: "AWS CodePipeline"
  - id: b
    text: "AWS Elastic Beanstalk"
  - id: c
    text: "AWS CodeDeploy"
  - id: d
    text: "AWS CloudFormation"
correct: ["d"]
references: []
tags: ["other-services", "operations", "imported"]
status: reviewed
lastReviewed: 2026-09-24
---

## Explanation

AWS CloudFormation is the de-facto service in AWS for infrastructure as code (IaC). It enables you to create and provision AWS infrastructure deployments predictably and repeatedly.

## Why the other options are incorrect

- **AWS CodePipeline:** AWS CodePipeline is a fully managed continuous delivery (CD) service that helps you automate your release pipeline for fast and reliable application and infrastructure updates. It automates the build, test, and deploy phases of your release process every time there is a code change.
- **AWS Elastic Beanstalk:** AWS Elastic Beanstalk is an easy-to-use service for deploying and scaling web applications and services developed with Java, .NET, PHP, Node.js, Python, Ruby, Go, and Docker. It automatically handles the deployment, from capacity provisioning, load balancing, auto-scaling to application health monitoring.
- **AWS CodeDeploy:** AWS CodeDeploy is a fully managed deployment service that automates software deployments to a variety of computing services such as EC2, Fargate, Lambda, and your on-premises servers.
