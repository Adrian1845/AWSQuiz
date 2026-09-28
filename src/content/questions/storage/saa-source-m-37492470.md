---
id: saa-source-m-37492470
title: "You would like to have a high-performance local cache for your application hosted on an EC2 instance. You don't mind losing the cache upon the termination of your EC2 instance. Which storage mechanism do you recommend as a Solutions Architect?"
domain: storage
services: ["EC2", "EBS", "EFS"]
difficulty: medium
type: single
choices:
  - id: a
    text: "EBS"
  - id: b
    text: "EFS"
  - id: c
    text: "Instance Store"
correct: ["c"]
references: []
tags: ["ec2", "storage", "imported"]
status: reviewed
lastReviewed: 2026-09-17
---

## Explanation

EC2 Instance Store provides the best disk I/O performance.

## Why the other options are incorrect

- **EBS:** EBS are network drives which makes it provides less I/O performance than Instance Store.
- **EFS:** EFS volumes are network file systems that can be mounted on many EC2 instances. EFS volumes are accessible through network which makes it provides less performance I/O than Instance Store.
