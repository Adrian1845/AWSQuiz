---
id: saa-source-m-37586499
title: "You're developing an application and would like to deploy it to Elastic Beanstalk with minimal cost. You should run it in .................."
domain: architecture
services: []
difficulty: medium
type: single
choices:
  - id: a
    text: "Single Instance Mode"
  - id: b
    text: "High Availability Mode"
correct: ["a"]
references: []
tags: ["saa", "architecture", "imported"]
status: reviewed
lastReviewed: 2026-09-17
---

## Explanation

The question mentions that you're still in the development stage and you want to reduce costs. Single Instance Mode will create one EC2 instance and one Elastic IP.

## Why the other options are incorrect

- **High Availability Mode:** This will create one or more EC2 instances and one Elastic Load Balancer (this costs more).
