---
id: saa-source-m-37586467
title: "Which of the following will NOT help us while designing a STATELESS application tier?"
domain: architecture
services: []
difficulty: medium
type: single
choices:
  - id: a
    text: "Store session data in Amazon RDS"
  - id: b
    text: "Store session data in Amazon ElastiCache"
  - id: c
    text: "Store session data in the client HTTP cookies"
  - id: d
    text: "Store session data on EBS volumes"
correct: ["d"]
references: []
tags: ["saa", "architecture", "imported"]
status: reviewed
lastReviewed: 2026-09-17
---

## Explanation

EBS volumes are created in a specific AZ and can only be attached to one EC2 instance at a time.

## Why the other options are incorrect

- **Store session data in Amazon RDS:** This will help as the data can be accessed from multiple EC2 instances.
- **Store session data in Amazon ElastiCache:** This will help as the data can be accessed from multiple EC2 instances.
- **Store session data in the client HTTP cookies:** This will help as the clients send their session data so that our EC2 instances don't need to remember/store session data.
