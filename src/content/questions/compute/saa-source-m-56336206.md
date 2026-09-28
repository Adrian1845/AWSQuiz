---
id: saa-source-m-56336206
title: "You have a mobile application and would like to give your users access to their own personal space in the S3 bucket. How do you achieve that?"
domain: compute
services: ["Lambda", "API Gateway", "Step Functions"]
difficulty: medium
type: single
choices:
  - id: a
    text: "Generate IAM user credentials for each of your application's users"
  - id: b
    text: "Use Amazon Cognito Identity Federation"
  - id: c
    text: "Use SAML Identity Federation"
  - id: d
    text: "Use a Bucket Policy to make your bucket public"
correct: ["b"]
references: []
tags: ["serverless", "compute", "imported"]
status: reviewed
lastReviewed: 2026-09-24
---

## Explanation

Amazon Cognito can be used to federate mobile user accounts and provide them with their own IAM permissions, so they can be able to access their own personal space in the S3 bucket.

## Why the other options are incorrect

- **Generate IAM user credentials for each of your application's users:** This does not scale well, we cannot create an IAM user per mobile application user.
- **Use SAML Identity Federation:** SAML Identity Federation is used to integrate an Identity Provider service such as Microsoft Active Directory with AWS. It does not work for mobile applications.
- **Use a Bucket Policy to make your bucket public:** Never make an S3 bucket public to your mobile application users. This would result in data leaks! Read horror stories here: https://businessinsights.bitdefender.com/worst-amazon-breaches
