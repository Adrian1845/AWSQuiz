---
id: saa-scenario-003
title: "A global payment application stores sensitive customer data in Aurora. The data must be encrypted before it leaves customer devices, and company database administrators must not be able to view plaintext. What should be implemented?"
domain: security
services: [Client-side envelope encryption]
difficulty: medium
type: single
choices:
  - id: a
    text: Aurora encryption at rest only
  - id: b
    text: RDS Multi-AZ
  - id: c
    text: AWS WAF on the database subnet
  - id: d
    text: Client-side envelope encryption with keys controlled by the customer application
correct: [d]
references: [{ note: encryption-and-secrets }]
tags: [client-side-encryption,aurora,kms, scenario-based]
status: reviewed
lastReviewed: 2026-09-16
---

## Explanation

**Client-side envelope encryption with keys controlled by the customer application** directly meets the stated technical and operational requirements. The alternatives do not provide the required behavior or are not designed for this use case.

