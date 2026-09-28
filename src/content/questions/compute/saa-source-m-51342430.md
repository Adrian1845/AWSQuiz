---
id: saa-source-m-51342430
title: "A company has a serverless application on AWS which consists of Lambda, DynamoDB, and Step Functions. In the last month, there are an increase in the number of requests against the application which results in an increase in DynamoDB costs, and requests started to be throttled. After further investigation, it shows that the majority of requests are read requests against some queries in the DynamoDB table. What do you recommend to prevent throttles and reduce costs efficiently?"
domain: compute
services: ["Lambda", "API Gateway", "Step Functions"]
difficulty: medium
type: single
choices:
  - id: a
    text: "Use an EC2 instance with Redis installed and place it between the Lambda function and the DynamoDB table"
  - id: b
    text: "Migrate from DynamoDB to Aurora and use ElastiCache to cache the most requested read data"
  - id: c
    text: "Migrate from DynamoDB to S3 and use CloudFront to cache the most requested read data"
  - id: d
    text: "Use DynamoDB Accelerator (DAX) to cache the most requested read data"
correct: ["d"]
references: []
tags: ["serverless", "compute", "imported"]
status: reviewed
lastReviewed: 2026-09-24
---

## Explanation

The correct answer is **Use DynamoDB Accelerator (DAX) to cache the most requested read data**.
