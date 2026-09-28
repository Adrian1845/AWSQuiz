---
id: saa-source-m-51343956
title: "A web application backend is hosted on EC2 instances in private subnets fronted by an Application Load Balancer in public subnets. There is a requirement to give some of the developers access to the backend EC2 instances but without exposing the backend EC2 instances to the Internet. You have created a bastion host EC2 instance in the public subnet and configured the backend EC2 instances Security Group to allow traffic from the bastion host. Which of the following is the best configuration for bastion host Security Group to make it secure?"
domain: networking
services: ["VPC", "Route 53", "CloudFront", "Transit Gateway", "Direct Connect"]
difficulty: medium
type: single
choices:
  - id: a
    text: "Allow traffic only on port 80 from the company’s public CIDR"
  - id: b
    text: "Allow traffic only on port 22 from the company’s public CIDR"
  - id: c
    text: "Allow traffic only on port 22 from the company’s private CIDR"
  - id: d
    text: "Allow traffic only on port 80 from the company’s private CIDR"
correct: ["b"]
references: []
tags: ["networking", "imported"]
status: reviewed
lastReviewed: 2026-09-24
---

## Explanation

The correct answer is **Allow traffic only on port 22 from the company’s public CIDR**.
