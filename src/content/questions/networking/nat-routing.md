---
id: saa-vpc-001
title: "Instances in a private subnet need outbound internet access for software updates, but must not accept unsolicited inbound traffic from the internet. Which solution meets this requirement?"
domain: networking
services: [VPC, NAT Gateway]
difficulty: easy
type: single
choices:
  - id: a
    text: Attach an internet gateway directly to the private subnet
  - id: b
    text: Route the private subnet through a NAT gateway in a public subnet
  - id: c
    text: Assign Elastic IP addresses to the private instances
  - id: d
    text: Use a VPC endpoint for all internet traffic
correct: [b]
references: [{ note: vpc, section: nat-gateway }]
tags: [routing, private-subnet]
status: reviewed
lastReviewed: 2026-09-14
---

## Explanation

A **NAT gateway** in a public subnet allows private-subnet resources to initiate outbound connections through an internet gateway while blocking unsolicited inbound connections.
