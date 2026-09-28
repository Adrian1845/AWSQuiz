---
id: saa-scenario-018
title: "A company has 50 VPCs and two on-premises networks. It needs centrally managed transitive routing without maintaining a mesh of peering connections. Which service should be used?"
domain: networking
services: [AWS Transit Gateway]
difficulty: medium
type: single
choices:
  - id: a
    text: VPC peering
  - id: b
    text: AWS PrivateLink
  - id: c
    text: AWS Transit Gateway
  - id: d
    text: A NAT gateway
correct: [c]
references: [{ note: connectivity }]
tags: [transit-gateway,vpc,hybrid-networking,routing, scenario-based]
status: reviewed
lastReviewed: 2026-09-16
---

## Explanation

**AWS Transit Gateway** directly meets the stated technical and operational requirements. The alternatives do not provide the required behavior or are not designed for this use case.

