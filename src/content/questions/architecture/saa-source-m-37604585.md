---
id: saa-source-m-37604585
title: "Which AWS Service analyzes your AWS account and gives recommendations for cost optimization, performance, security, fault tolerance, and service limits?"
domain: architecture
services: []
difficulty: medium
type: single
choices:
  - id: a
    text: "AWS Trusted Advisor"
  - id: b
    text: "AWS CloudTrail"
  - id: c
    text: "AWS Identity and Access Management (AWS IAM)"
  - id: d
    text: "AWS CloudFormation"
correct: ["a"]
references: []
tags: ["whitepaper", "architecture", "imported"]
status: reviewed
lastReviewed: 2026-09-24
---

## Explanation

AWS Trusted Advisor provides recommendations that help you follow AWS best practices. It evaluates your account by using checks. These checks identify ways to optimize your AWS infrastructure, improve security and performance, reduce costs, and monitor service quotas.

## Why the other options are incorrect

- **AWS CloudTrail:** AWS CloudTrail allows you to log, continuously monitor, and retain account activity related to actions across your AWS infrastructure. It provides the event history of your AWS account activity, audit API calls made through the AWS Management Console, AWS SDKs, AWS CLI. You can use CloudTrail to detect unusual activity in your AWS accounts.
- **AWS Identity and Access Management (AWS IAM):** AWS IAM enables you to manage access to AWS services and resources securely. You can create and manage IAM users, groups, and roles, and use permissions to allow and deny their access to AWS resources.
- **AWS CloudFormation:** AWS CloudFormation is the de-facto service in AWS for infrastructure as code (IaC). It enables you to create and provision AWS infrastructure deployments predictably and repeatedly.
