---
id: saa-source-m-37491452
title: "What should you do to increase your root account security?"
domain: security
services: ["IAM"]
difficulty: medium
type: single
choices:
  - id: a
    text: "Remove permissions from the root account"
  - id: b
    text: "Only access AWS services through AWS Command Line Interface (CLI)"
  - id: c
    text: "Don't create IAM Users, only access your AWS account using the root account"
  - id: d
    text: "Enable Multi-Factor Authentication (MFA)"
correct: ["d"]
references: []
tags: ["iam", "security", "imported"]
status: reviewed
lastReviewed: 2026-09-17
---

## Explanation

When you enable MFA, this adds another layer of security. Even if your password is stolen, lost, or hacked your account is not compromised.

## Why the other options are incorrect

- **Remove permissions from the root account:** You can not remove permissions from the root account, it has all permissions by default.
- **Only access AWS services through AWS Command Line Interface (CLI):** This won't help with your root account security.
- **Don't create IAM Users, only access your AWS account using the root account:** This is a bad practice. You should access your AWS account using IAM Users.
