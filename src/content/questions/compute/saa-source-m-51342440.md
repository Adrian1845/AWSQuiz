---
id: saa-source-m-51342440
title: "A website is currently in the development process and it is going to be hosted on AWS. There is a requirement to store user sessions for users logged in to the website with an automatic expiry and deletion of expired user sessions. Which of the following AWS services are best suited for this use case?"
domain: compute
services: ["Lambda", "API Gateway", "Step Functions"]
difficulty: medium
type: single
choices:
  - id: a
    text: "Store users’ sessions in an S3 bucket and enable S3 Lifecycle Policy"
  - id: b
    text: "Store users’ sessions locally in an EC2 instance"
  - id: c
    text: "Store users’ sessions in a DynamoDB table and enable TTL"
  - id: d
    text: "Store users’ sessions in an EFS file system"
correct: ["c"]
references: []
tags: ["serverless", "compute", "imported"]
status: reviewed
lastReviewed: 2026-09-24
---

## Explanation

The correct answer is **Store users’ sessions in a DynamoDB table and enable TTL**.
