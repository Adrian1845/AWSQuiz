---
id: saa-scenario-019
title: "A security team must block a known malicious CIDR range at a subnet boundary, while keeping application security groups allow-only. Which control should be used?"
domain: networking
services: [A network ACL]
difficulty: hard
type: single
choices:
  - id: a
    text: A security group
  - id: b
    text: An IAM policy
  - id: c
    text: AWS WAF on an unrelated application
  - id: d
    text: A network ACL with an explicit deny rule
correct: [d]
references: [{ note: vpc }]
tags: [nacl,network-acl,network-security,deny, scenario-based]
status: reviewed
lastReviewed: 2026-09-16
---

## Explanation

**A network ACL with an explicit deny rule** directly meets the stated technical and operational requirements. The alternatives do not provide the required behavior or are not designed for this use case.

