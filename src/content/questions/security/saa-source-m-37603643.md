---
id: saa-source-m-37603643
title: "In Server-Side Encryption, where do the encryption and decryption happen?"
domain: security
services: ["IAM", "KMS", "Cognito", "WAF", "Shield", "GuardDuty"]
difficulty: medium
type: single
choices:
  - id: a
    text: "Both Encryption and Decryption happen on the server"
  - id: b
    text: "Both Encryption and Decryption happen on the client"
  - id: c
    text: "Encryption happens on the server and Decryption happens on the client"
  - id: d
    text: "Encryption happens on the client and Decryption happens on the server"
correct: ["a"]
references: []
tags: ["security", "imported"]
status: reviewed
lastReviewed: 2026-09-24
---

## Explanation

In Server-Side Encryption, we can't do encryption/decryption ourselves as we don't have access to the corresponding encryption key.
