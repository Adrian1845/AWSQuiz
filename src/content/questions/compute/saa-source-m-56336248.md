---
id: saa-source-m-56336248
title: "You are running a mobile application where you want each registered user to upload/download images to/from his own folder in the S3 bucket. Also, you want to give your users to sign-up and sign in using their social media accounts (e.g., Facebook). Which AWS service should you choose?"
domain: compute
services: ["Lambda", "API Gateway", "Step Functions"]
difficulty: medium
type: single
choices:
  - id: a
    text: "AWS Identity and Access Management (IAM)"
  - id: b
    text: "AWS IAM Identity Center"
  - id: c
    text: "Amazon Cognito"
  - id: d
    text: "Amazon CloudFront"
correct: ["c"]
references: []
tags: ["serverless", "compute", "imported"]
status: reviewed
lastReviewed: 2026-09-24
---

## Explanation

Amazon Cognito lets you add user sign-up, sign-in, and access control to your web and mobile apps quickly and easily. Amazon Cognito scales to millions of users and supports sign-in with social identity providers, such as Apple, Facebook, Google, and Amazon, and enterprise identity providers via SAML 2.0 and OpenID Connect.

## Why the other options are incorrect

- **AWS Identity and Access Management (IAM):** AWS IAM enables you to manage access to AWS services and resources securely. It allows you to create and manage AWS users and groups, and use permissions to allow and deny their access to AWS resources. IAM can not be used to federate mobile users.
- **AWS IAM Identity Center:** AWS IAM Identity Center makes it easy to centrally manage SSO access to all of your AWS accounts and cloud applications. It helps you manage SSO access and user permissions across all your AWS accounts in AWS Organizations. It also helps when you manage access and permissions to commonly used 3rd party software as a service (SaaS) applications, AWS SSO-integrated applications as well as custom applications that support Security Assertion Markup Language (SAML) 2.0.  AWS SSO also includes built-in SAML integrations to many business applications, such as Salesforce, Box, and Office 365.
- **Amazon CloudFront:** Amazon CloudFront is a fast content delivery network (CDN) service that securely delivers data, videos, applications, and APIs to customers globally with low latency, high transfer speeds. Amazon CloudFront does not federate mobile users or generate security credentials.
