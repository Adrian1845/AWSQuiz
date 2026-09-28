---
id: saa-source-m-37492314
title: "Which of the following EBS volume types can be used as boot volumes when you create EC2 instances?"
domain: storage
services: ["EC2", "EBS", "EFS"]
difficulty: medium
type: single
choices:
  - id: a
    text: "gp2, gp3, st1, sc1"
  - id: b
    text: "gp2, gp3, io1, io2"
  - id: c
    text: "io1, io2, st1, sc1"
correct: ["b"]
references: []
tags: ["ec2", "storage", "imported"]
status: reviewed
lastReviewed: 2026-09-17
---

## Explanation

When creating EC2 instances, you can only use the following EBS volume types as boot volumes: gp2, gp3, io1, io2, and Magnetic (Standard).
