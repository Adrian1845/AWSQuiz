---
id: saa-source-m-37491438
title: "Which of the following is an IAM best practice?"
domain: security
services: ["IAM"]
difficulty: medium
type: single
choices:
  - id: a
    text: "Create several IAM Users for one physical person"
  - id: b
    text: "Don't use the root user account"
  - id: c
    text: "Share your AWS account credentials with your colleague, so (s)he can perform a task for you"
  - id: d
    text: "Do not enable MFA for easier access"
correct: ["b"]
references: []
tags: ["iam", "security", "imported"]
status: reviewed
lastReviewed: 2026-09-17
---

## Explanation

Use the root account only to create your first IAM User and a few account/service management tasks. For everyday tasks, use an IAM User.

## Why the other options are incorrect

- **Create several IAM Users for one physical person:** This is not an IAM best practice, you should create one IAM User per physical person.
- **Share your AWS account credentials with your colleague, so (s)he can perform a task for you:** This is not an IAM best practice, never share your AWS account credentials (password or Access Keys) with others.
- **Do not enable MFA for easier access:** This is not an IAM best practice, you should enable Multi-Factor Authentication (MFA) for all AWS accounts and IAM Users to ensure maximum security.
