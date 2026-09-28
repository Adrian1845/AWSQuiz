---
id: saa-source-m-37586409
title: "You have purchased a domain on GoDaddy and would like to use Route 53 as the DNS Service Provider. What should you do to make this work?"
domain: networking
services: ["Route 53"]
difficulty: medium
type: single
choices:
  - id: a
    text: "Request for a domain transfer"
  - id: b
    text: "Create a Private Hosted Zone and update the 3rd party Registrar NS records"
  - id: c
    text: "Create a Public Hosted Zone and update the Route 53 NS records"
  - id: d
    text: "Create a Public Hosted Zone and update the 3rd party Registrar NS records"
correct: ["d"]
references: []
tags: ["route53", "dns", "imported"]
status: reviewed
lastReviewed: 2026-09-17
---

## Explanation

Public Hosted Zones are meant to be used for people requesting your website through the Internet. Finally, NS records must be updated on the 3rd party Registrar.

## Why the other options are incorrect

- **Create a Private Hosted Zone and update the 3rd party Registrar NS records:** Private Hosted Zones are meant to be used for internal network (e.g., VPC) DNS queries and are not publicly accessible.
