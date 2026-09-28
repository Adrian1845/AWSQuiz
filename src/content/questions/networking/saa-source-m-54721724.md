---
id: saa-source-m-54721724
title: "A web application hosted on a fleet of EC2 instances managed by an Auto Scaling Group. You are exposing this application through an Application Load Balancer. Both the EC2 instances and the ALB are deployed on a VPC with the following CIDR 192.168.0.0/18. How do you configure the EC2 instances' security group to ensure only the ALB can access them on port 80?"
domain: networking
services: ["VPC", "Route 53", "CloudFront", "Transit Gateway", "Direct Connect"]
difficulty: medium
type: single
choices:
  - id: a
    text: "Add an Inbound Rule with port 80 and 0.0.0.0/0 as the source"
  - id: b
    text: "Add an Inbound Rule with port 80 and 192.168.0.0/18 as the source"
  - id: c
    text: "Add an Inbound Rule with port 80 and ALB's Security Group as the source"
  - id: d
    text: "Load an SSL certificate on the ALB"
correct: ["c"]
references: []
tags: ["networking", "imported"]
status: reviewed
lastReviewed: 2026-09-24
---

## Explanation

This is the most secure way of ensuring only the ALB can access the EC2 instances. Referencing by security groups in rules is an extremely powerful rule and many questions at the exam rely on it. Make sure you fully master the concepts behind it!
