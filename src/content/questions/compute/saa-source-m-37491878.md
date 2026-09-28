---
id: saa-source-m-37491878
title: "You have launched an EC2 instance that will host a NodeJS application. After installing all the required software and configured your application, you noted down the EC2 instance public IPv4 so you can access it. Then, you stopped and then started your EC2 instance to complete the application configuration. After restart, you can't access the EC2 instance, and you found that the EC2 instance public IPv4 has been changed. What should you do to assign a fixed public IPv4 to your EC2 instance?"
domain: compute
services: ["EC2"]
difficulty: medium
type: single
choices:
  - id: a
    text: "Allocate an Elastic IP and assign it to your EC2 instance"
  - id: b
    text: "From inside your EC2 instance OS, change network configuration from DHCP to static and assign it a public IPv4"
  - id: c
    text: "Contact AWS Support and request a fixed public IPv4 to your EC2 instance"
  - id: d
    text: "This can't be done, you can only assign a fixed private IPv4 to your EC2 instance"
correct: ["a"]
references: []
tags: ["ec2", "saa", "imported"]
status: reviewed
lastReviewed: 2026-09-17
---

## Explanation

Elastic IP is a public IPv4 that you own as long as you want and you can attach it to one EC2 instance at a time.

## Why the other options are incorrect

- **Contact AWS Support and request a fixed public IPv4 to your EC2 instance:** This can't be done, there's no such thing in AWS Support.
- **This can't be done, you can only assign a fixed private IPv4 to your EC2 instance:** You can assign both public and private IPv4 to your EC2 instances.
