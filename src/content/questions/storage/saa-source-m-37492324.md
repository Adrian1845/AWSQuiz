---
id: saa-source-m-37492324
title: "You would like to encrypt an unencrypted EBS volume attached to your EC2 instance. What should you do?"
domain: storage
services: ["EC2", "EBS", "EFS"]
difficulty: medium
type: single
choices:
  - id: a
    text: "Create an EBS snapshot of your EBS volume. Copy the snapshot and tick the option to encrypt the copied snapshot. Then, use the encrypted snapshot to create a new EBS volume"
  - id: b
    text: "Select your EBS volume, choose Edit Attributes, then tick the Encrypt using KMS option"
  - id: c
    text: "Create a new encrypted EBS volume, then copy data from your unencrypted EBS volume to the new EBS volume."
  - id: d
    text: "Submit a request to AWS Support to encrypt your EBS volume"
correct: ["a"]
references: []
tags: ["ec2", "storage", "imported"]
status: reviewed
lastReviewed: 2026-09-17
---

## Explanation

The correct answer is **Create an EBS snapshot of your EBS volume. Copy the snapshot and tick the option to encrypt the copied snapshot. Then, use the encrypted snapshot to create a new EBS volume**.

## Why the other options are incorrect

- **Create a new encrypted EBS volume, then copy data from your unencrypted EBS volume to the new EBS volume.:** This can be done but it'll take a lot of manual work, time, and will be costly especially if your EBS volume has a lot of data.
