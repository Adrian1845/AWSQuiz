---
id: saa-source-m-37603651
title: "In Client-Side Encryption, the server must know our encryption scheme before we can upload the data."
domain: security
services: ["IAM", "KMS", "Cognito", "WAF", "Shield", "GuardDuty"]
difficulty: medium
type: single
choices:
  - id: a
    text: "False"
  - id: b
    text: "True"
correct: ["a"]
references: []
tags: ["security", "imported"]
status: reviewed
lastReviewed: 2026-09-24
---

## Explanation

With Client-Side Encryption, the server doesn't need to know any information about the encryption scheme being used, as the server will not perform any encryption or decryption operations.
