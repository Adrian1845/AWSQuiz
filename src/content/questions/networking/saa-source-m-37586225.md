---
id: saa-source-m-37586225
title: "You have updated a Route 53 Record's myapp.mydomain.com value to point to a new Elastic Load Balancer, but it looks like users are still redirected to the old ELB. What is a possible cause for this behavior?"
domain: networking
services: ["Route 53"]
difficulty: medium
type: single
choices:
  - id: a
    text: "Because of the Alias record"
  - id: b
    text: "Because of the CNAME record"
  - id: c
    text: "Because of the TTL"
  - id: d
    text: "Because of Route 53 Health Checks"
correct: ["c"]
references: []
tags: ["route53", "dns", "imported"]
status: reviewed
lastReviewed: 2026-09-17
---

## Explanation

Each DNS record has a TTL (Time To Live) which orders clients for how long to cache these values and not overload the DNS Resolver with DNS requests. The TTL value should be set to strike a balance between how long the value should be cached vs. how many requests should go to the DNS Resolver.
