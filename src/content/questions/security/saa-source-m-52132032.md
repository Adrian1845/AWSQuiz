---
id: saa-source-m-52132032
title: "For compliance reasons, your company has a policy mandate that database backups must be retained for 4 years. It shouldn't be possible to erase them. What do you recommend?"
domain: security
services: ["S3", "IAM", "KMS"]
difficulty: medium
type: single
choices:
  - id: a
    text: "Glacier Vaults with Vault Lock Policies"
  - id: b
    text: "EFS network drives with restrictive Linux permissions"
  - id: c
    text: "S3 with Bucket Policies"
correct: ["a"]
references: []
tags: ["s3", "security", "imported"]
status: reviewed
lastReviewed: 2026-09-17
---

## Explanation

The correct answer is **Glacier Vaults with Vault Lock Policies**.
