---
id: saa-source-m-37491400
title: "What is a proper definition of an IAM Role?"
domain: security
services: ["IAM"]
difficulty: medium
type: single
choices:
  - id: a
    text: "IAM Users in multiple User Groups"
  - id: b
    text: "An IAM entity that defines a password policy for IAM Users"
  - id: c
    text: "An IAM entity that defines a set of permissions for making requests to AWS services, and will be used by an AWS service"
  - id: d
    text: "Permissions assigned to IAM Users to perform actions"
correct: ["c"]
references: []
tags: ["iam", "security", "imported"]
status: reviewed
lastReviewed: 2026-09-17
---

## Explanation

Some AWS services need to perform actions on your behalf. To do so, you assign permissions to AWS services with IAM Roles.

## Why the other options are incorrect

- **IAM Users in multiple User Groups:** IAM Users can belong to multiple User Groups, but it's not the definition of an IAM Role.
- **An IAM entity that defines a password policy for IAM Users:** IAM Roles are not a password policy.
- **Permissions assigned to IAM Users to perform actions:** IAM Roles can not be assigned to IAM Users.
