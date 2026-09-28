---
id: saa-source-m-37595419
title: "You have created a Lambda function that typically will take around 1 hour to process some data. The code works fine when you run it locally on your machine, but when you invoke the Lambda function it fails with a \"timeout\" error after 3 seconds. What should you do?"
domain: compute
services: ["Lambda", "API Gateway", "Step Functions"]
difficulty: medium
type: single
choices:
  - id: a
    text: "Configure your Lambda's timeout to 25 minutes"
  - id: b
    text: "Configure your Lambda's memory to 10 GB"
  - id: c
    text: "Run your code somewhere else (e.g., EC2 instance)"
correct: ["c"]
references: []
tags: ["serverless", "compute", "imported"]
status: reviewed
lastReviewed: 2026-09-24
---

## Explanation

Lambda's maximum execution time is 15 minutes. You can run your code somewhere else such as an EC2 instance or use Amazon ECS.

## Why the other options are incorrect

- **Configure your Lambda's timeout to 25 minutes:** The maximum timeout you can configure in Lambda is 15 minutes.
- **Configure your Lambda's memory to 10 GB:** This may speed up the function processing time, but it wouldn't reduce execution time below 15 minutes.
