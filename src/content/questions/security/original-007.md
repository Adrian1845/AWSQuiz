---
id: saa-original-007
title: "During an architecture review, a university states that it must give an EC2 application temporary least-privilege permissions without access keys. What is the best recommendation?"
domain: security
services: [IAM]
difficulty: easy
type: single
choices:
  - id: a
    text: An IAM user access key
  - id: b
    text: A security group
  - id: c
    text: An IAM role attached to the instance
  - id: d
    text: A service control policy
correct: [c]
references: [{ note: iam-and-organizations }]
tags: [iam,temporary-credentials, practice-bank]
status: reviewed
lastReviewed: 2026-09-15
---

## Explanation

**An IAM role attached to the instance** is the best fit because it is designed to give an EC2 application temporary least-privilege permissions without access keys. The other options do not directly satisfy the stated requirement.
