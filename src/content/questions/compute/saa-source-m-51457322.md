---
id: saa-source-m-51457322
title: "You have a website hosted in EC2 instances in an Auto Scaling Group fronted by an Application Load Balancer. Currently, the website is served over HTTP, and you have been tasked to configure it to use HTTPS. You have created a certificate in ACM and attached it to the Application Load Balancer. What you can do to force users to access the website using HTTPS instead of HTTP?"
domain: compute
services: ["EC2", "Auto Scaling", "Elastic Load Balancing"]
difficulty: medium
type: single
choices:
  - id: a
    text: "Send an email to all customers to use HTTPS instead of HTTP"
  - id: b
    text: "Configure the Application Load Balancer to redirect HTTP to HTTPS"
  - id: c
    text: "Configure the DNS record to redirect HTTP to HTTPS"
correct: ["b"]
references: []
tags: ["availability", "scalability", "imported"]
status: reviewed
lastReviewed: 2026-09-17
---

## Explanation

The correct answer is **Configure the Application Load Balancer to redirect HTTP to HTTPS**.
