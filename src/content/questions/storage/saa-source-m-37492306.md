---
id: saa-source-m-37492306
title: "You can use an AMI in N.Virginia Region us-east-1 to launch an EC2 instance in any AWS Region."
domain: storage
services: ["EC2", "EBS", "EFS"]
difficulty: medium
type: single
choices:
  - id: a
    text: "True"
  - id: b
    text: "False"
correct: ["b"]
references: []
tags: ["ec2", "storage", "imported"]
status: reviewed
lastReviewed: 2026-09-17
---

## Explanation

AMIs are built for a specific AWS Region, they're unique for each AWS Region. You can't launch an EC2 instance using an AMI in another AWS Region, but you can copy the AMI to the target AWS Region and then use it to create your EC2 instances.
