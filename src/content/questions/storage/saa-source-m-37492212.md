---
id: saa-source-m-37492212
title: "You have launched an EC2 instance with two EBS volumes, Root volume type and the other EBS volume type to store the data. A month later you are planning to terminate the EC2 instance. What's the default behavior that will happen to each EBS volume?"
domain: storage
services: ["EC2", "EBS", "EFS"]
difficulty: medium
type: single
choices:
  - id: a
    text: "Both the root volume type and the EBS volume type will be deleted"
  - id: b
    text: "The Root volume type will be deleted and the EBS volume type will not be deleted"
  - id: c
    text: "The root volume type will not be deleted and the EBS volume type will be deleted"
  - id: d
    text: "Both the root volume type and the EBS volume type will not be deleted"
correct: ["b"]
references: []
tags: ["ec2", "storage", "imported"]
status: reviewed
lastReviewed: 2026-09-17
---

## Explanation

By default, the Root volume type will be deleted as its "Delete On Termination" attribute checked by default. Any other EBS volume types will not be deleted as its "Delete On Termination" attribute disabled by default.
