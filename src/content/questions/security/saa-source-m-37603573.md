---
id: saa-source-m-37603573
title: "To enable In-flight Encryption (In-Transit Encryption), we need to have ........................"
domain: security
services: ["IAM", "KMS", "Cognito", "WAF", "Shield", "GuardDuty"]
difficulty: medium
type: single
choices:
  - id: a
    text: "an HTTP endpoint with an SSL certificate"
  - id: b
    text: "an HTTPS endpoint with an SSL certificate"
  - id: c
    text: "a TCP endpoint"
correct: ["b"]
references: []
tags: ["security", "imported"]
status: reviewed
lastReviewed: 2026-09-24
---

## Explanation

In-flight Encryption = HTTPS, and HTTPS can not be enabled without an SSL certificate.
