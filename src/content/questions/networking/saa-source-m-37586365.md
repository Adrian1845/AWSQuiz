---
id: saa-source-m-37586365
title: "You have an application that's hosted in two different AWS Regions us-west-1 and eu-west-2. You want your users to get the best possible user experience by minimizing the response time from application servers to your users. Which Route 53 Routing Policy should you choose?"
domain: networking
services: ["Route 53"]
difficulty: medium
type: single
choices:
  - id: a
    text: "Multi Value"
  - id: b
    text: "Weighted"
  - id: c
    text: "Latency"
  - id: d
    text: "Geolocation"
correct: ["c"]
references: []
tags: ["route53", "dns", "imported"]
status: reviewed
lastReviewed: 2026-09-17
---

## Explanation

Latency Routing Policy will evaluate the latency between your users and AWS Regions, and help them get a DNS response that will minimize their latency (e.g. response time)
