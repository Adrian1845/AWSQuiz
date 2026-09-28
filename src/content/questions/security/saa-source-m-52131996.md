---
id: saa-source-m-52131996
title: "An e-commerce company has its customers and orders data stored in an S3 bucket. The company’s CEO wants to generate a report to show the list of customers and the revenue for each customer. Customer data stored in files on the S3 bucket has sensitive information that we don’t want to expose in the report. How do you recommend the report can be created without exposing sensitive information?"
domain: security
services: ["S3", "IAM", "KMS"]
difficulty: medium
type: single
choices:
  - id: a
    text: "Use S3 Object Lambda to change the objects before they are retrieved by the report generator application"
  - id: b
    text: "Create another S3 bucket. Create a lambda function to process each file, remove the sensitive information, and then move them to the new S3 bucket"
  - id: c
    text: "Use S3 Object Lock to lock the sensitive information from being fetched by the report generator application"
correct: ["a"]
references: []
tags: ["s3", "security", "imported"]
status: reviewed
lastReviewed: 2026-09-17
---

## Explanation

The correct answer is **Use S3 Object Lambda to change the objects before they are retrieved by the report generator application**.
