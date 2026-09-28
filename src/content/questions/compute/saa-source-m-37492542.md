---
id: saa-source-m-37492542
title: "You are using an Application Load Balancer to distribute traffic to your website hosted on EC2 instances. It turns out that your website only sees traffic coming from private IPv4 addresses which are in fact your Application Load Balancer's IP addresses. What should you do to get the IP address of clients connected to your website?"
domain: compute
services: ["EC2", "Auto Scaling", "Elastic Load Balancing"]
difficulty: medium
type: single
choices:
  - id: a
    text: "Modify your website's frontend so that users send their IP in every request"
  - id: b
    text: "Modify your website's backend to get the client IP address from the X-Forwarded-For header"
  - id: c
    text: "Modify your website's backend to get the client IP address from the X-Forwarded-Port header"
  - id: d
    text: "Modify your website's backend to get the client IP address from the X-Forwarded-Proto header"
correct: ["b"]
references: []
tags: ["availability", "scalability", "imported"]
status: reviewed
lastReviewed: 2026-09-17
---

## Explanation

When using an Application Load Balancer to distribute traffic to your EC2 instances, the IP address you'll receive requests from will be the ALB's private IP addresses. To get the client's IP address, ALB adds an additional header called "X-Forwarded-For" contains the client's IP address.

## Why the other options are incorrect

- **Modify your website's backend to get the client IP address from the X-Forwarded-Port header:** "X-Forwarded-Port" used to get the client's requested port.
- **Modify your website's backend to get the client IP address from the X-Forwarded-Proto header:** "X-Forwarded-Proto" used to get the client's requested protocol.
