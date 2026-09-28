---
id: saa-source-m-37511962
title: "Application Load Balancers can route traffic to different Target Groups based on the following, EXCEPT:"
domain: compute
services: ["EC2", "Auto Scaling", "Elastic Load Balancing"]
difficulty: medium
type: single
choices:
  - id: a
    text: "Client's Location (Geography)"
  - id: b
    text: "Hostname"
  - id: c
    text: "Request URL Path"
  - id: d
    text: "Source IP Address"
correct: ["a"]
references: []
tags: ["availability", "scalability", "imported"]
status: reviewed
lastReviewed: 2026-09-17
---

## Explanation

ALBs can route traffic to different Target Groups based on URL Path, Hostname, HTTP Headers, and Query Strings.
