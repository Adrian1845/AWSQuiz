---
id: saa-source-m-51342432
title: "You are a DevOps engineer in a football company that has a website that is backed by a DynamoDB table. The table stores viewers’ feedback for football matches. You have been tasked to work with the analytics team to generate reports on the viewers’ feedback. The analytics team wants the data in DynamoDB json format and hosted in an S3 bucket to start working on it and create the reports. What is the best and most cost-effective way you can achieve this task?"
domain: compute
services: ["Lambda", "API Gateway", "Step Functions"]
difficulty: medium
type: single
choices:
  - id: a
    text: "Select DynamoDB table then select Export to S3"
  - id: b
    text: "Create a Lambda function to read DynamoDB data, convert them to json files, then store the files in S3 bucket"
  - id: c
    text: "Use AWS Transfer Family"
  - id: d
    text: "Use AWS DataSync"
correct: ["a"]
references: []
tags: ["serverless", "compute", "imported"]
status: reviewed
lastReviewed: 2026-09-24
---

## Explanation

The correct answer is **Select DynamoDB table then select Export to S3**.
