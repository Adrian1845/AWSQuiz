---
id: saa-source-m-37586493
title: "As a Solutions Architect, you're planning to migrate a complex ERP software suite to AWS Cloud. You're planning to host the software on a set of Linux EC2 instances managed by an Auto Scaling Group. The software traditionally takes over an hour to set up on a Linux machine. How do you recommend you speed up the installation process when there's a scale-out event?"
domain: architecture
services: []
difficulty: medium
type: single
choices:
  - id: a
    text: "Use a Golden AMI"
  - id: b
    text: "Bootstrap using EC2 User Data"
  - id: c
    text: "Store the application in Amazon RDS"
  - id: d
    text: "Retrieve the application setup files from EFS"
correct: ["a"]
references: []
tags: ["saa", "architecture", "imported"]
status: reviewed
lastReviewed: 2026-09-17
---

## Explanation

Golden AMI is an image that contains all your software installed and configured so that future EC2 instances can boot up quickly from that AMI.

## Why the other options are incorrect

- **Bootstrap using EC2 User Data:** EC2 User Data allows you to automate the installation steps, but the installation would still take one hour to complete.
- **Store the application in Amazon RDS:** RDS is used to store relational data, not applications.
- **Retrieve the application setup files from EFS:** Retrieving application setup files from EFS won't help speed up the installation and configuration time.
