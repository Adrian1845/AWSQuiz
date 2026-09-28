---
id: saa-source-m-56336218
title: "You are developing a new web and mobile application that will be hosted on AWS and currently, you are working on developing the login and signup page. The application backend is serverless and you are using Lambda, DynamoDB, and API Gateway. Which of the following is the best and easiest approach to configure the authentication for your backend?"
domain: compute
services: ["Lambda", "API Gateway", "Step Functions"]
difficulty: medium
type: single
choices:
  - id: a
    text: "Store users’ credentials in a DynamoDB table encrypted using KMS"
  - id: b
    text: "Store users’ credentials in an S3 bucket encrypted using KMS"
  - id: c
    text: "Use Cognito User Pools"
  - id: d
    text: "Store users’ credentials in AWS Secrets Manager"
correct: ["c"]
references: []
tags: ["serverless", "compute", "imported"]
status: reviewed
lastReviewed: 2026-09-24
---

## Explanation

The correct answer is **Use Cognito User Pools**.
