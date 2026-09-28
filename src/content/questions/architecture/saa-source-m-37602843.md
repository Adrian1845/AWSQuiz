---
id: saa-source-m-37602843
title: "You would like to create an architecture for a micro-services application whose sole purpose is to encode videos stored in an S3 bucket and store the encoded videos back into an S3 bucket. You would like to make this micro-services application reliable and has the ability to retry upon failures. Each video may take over 25 minutes to be processed. The services used in the architecture should be asynchronous and should have the capability to be stopped for a day and resume the next day from the videos that haven't been encoded yet. Which of the following AWS services would you recommend in this scenario?"
domain: architecture
services: ["Lambda", "API Gateway", "Kinesis", "EventBridge"]
difficulty: medium
type: single
choices:
  - id: a
    text: "Amazon S3 + AWS Lambda"
  - id: b
    text: "Amazon SNS + Amazon EC2"
  - id: c
    text: "Amazon SQS + Amazon EC2"
  - id: d
    text: "Amazon SQS + AWS Lambda"
correct: ["c"]
references: []
tags: ["serverless", "architecture", "imported"]
status: reviewed
lastReviewed: 2026-09-24
---

## Explanation

Amazon SQS allows you to retain messages for days and process them later, while we can take down our EC2 instances.

## Why the other options are incorrect

- **Amazon S3 + AWS Lambda:** When using a Lambda function with S3, the Lambda function would need to be triggered immediately and can't be postponed until tomorrow to be run.
- **Amazon SNS + Amazon EC2:** Amazon SNS won't allow us to retry by putting back a message into a queue in case of EC2 failures.
- **Amazon SQS + AWS Lambda:** This would work, but it can't be used in this scenario as the maximum execution time for a Lambda function is 15 minutes.
