---
id: saa-source-m-37603359
title: "You have strong regulatory requirements to only allow fully internally audited AWS services in production. You still want to allow your teams to experiment in a development environment while services are being audited. How can you best set this up?"
domain: security
services: ["IAM", "AWS Organizations", "STS"]
difficulty: medium
type: single
choices:
  - id: a
    text: "Provide the Dev team with a completely independent AWS account"
  - id: b
    text: "Apply a global IAM policy on your Prod account"
  - id: c
    text: "Create an AWS Organization and create two Prod and Dev OUs, then Apply an SCP on the Prod OU"
  - id: d
    text: "Create an AWS Config Rule"
correct: ["c"]
references: []
tags: ["iam", "security", "imported"]
status: reviewed
lastReviewed: 2026-09-24
---

## Explanation

The correct answer is **Create an AWS Organization and create two Prod and Dev OUs, then Apply an SCP on the Prod OU**.
