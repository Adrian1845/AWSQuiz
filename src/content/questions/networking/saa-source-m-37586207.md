---
id: saa-source-m-37586207
title: "You have purchased mycoolcompany.com on Amazon Route 53 Registrar and would like the domain to point to your Elastic Load Balancer my-elb-1234567890.us-west-2.elb.amazonaws.com. Which Route 53 Record type must you use here?"
domain: networking
services: ["Route 53"]
difficulty: medium
type: single
choices:
  - id: a
    text: "CNAME"
  - id: b
    text: "Alias"
correct: ["b"]
references: []
tags: ["route53", "dns", "imported"]
status: reviewed
lastReviewed: 2026-09-17
---

## Explanation

The correct answer is **Alias**.

## Why the other options are incorrect

- **CNAME:** You can't create a CNAME record that has the same name as the top node of the DNS namespace (Zone Apex), in our case "mycoolcompany.com."
