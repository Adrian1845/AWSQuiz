---
id: saa-original-009
title: "A travel agency has a production requirement to block SQL injection and rate-limit malicious HTTP requests. Which choice satisfies it?"
domain: security
services: [AWS WAF]
difficulty: easy
type: single
choices:
  - id: a
    text: AWS WAF
  - id: b
    text: A security group
  - id: c
    text: AWS Shield Standard
  - id: d
    text: A network ACL
correct: [a]
references: [{ note: security-services }]
tags: [web-security,application-security, practice-bank]
status: reviewed
lastReviewed: 2026-09-15
---

## Explanation

**AWS WAF** is the best fit because it is designed to block SQL injection and rate-limit malicious HTTP requests. The other options do not directly satisfy the stated requirement.
