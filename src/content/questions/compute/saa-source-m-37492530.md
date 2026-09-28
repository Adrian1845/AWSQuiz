---
id: saa-source-m-37492530
title: "You are running a website on 10 EC2 instances fronted by an Elastic Load Balancer. Your users are complaining about the fact that the website always asks them to re-authenticate when they are moving between website pages. You are puzzled because it's working just fine on your machine and in the Dev environment with 1 EC2 instance. What could be the reason?"
domain: compute
services: ["EC2", "Auto Scaling", "Elastic Load Balancing"]
difficulty: medium
type: single
choices:
  - id: a
    text: "Your website must have an issue when hosted on multiple EC2 instances"
  - id: b
    text: "The EC2 instances log out users as they can't see their IP addresses, instead, they receive ELB IP addresses."
  - id: c
    text: "The Elastic Load Balancer does not have Sticky Sessions enabled"
correct: ["c"]
references: []
tags: ["availability", "scalability", "imported"]
status: reviewed
lastReviewed: 2026-09-17
---

## Explanation

ELB Sticky Session feature ensures traffic for the same client is always redirected to the same target (e.g., EC2 instance). This helps that the client does not lose his session data.
