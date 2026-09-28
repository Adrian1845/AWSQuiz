---
id: saa-source-m-51342366
title: "A Machine Learning company is working on a set of datasets that are hosted on S3 buckets. The company decided to release those datasets to the public to be useful for others in their research, but they don’t want to configure the S3 bucket to be public. And those datasets should be exposed over the FTP protocol. What can they do to do the requirement efficiently and with the least effort?"
domain: storage
services: ["S3", "EBS", "EFS", "FSx", "DataSync", "Storage Gateway"]
difficulty: medium
type: single
choices:
  - id: a
    text: "Use AWS Transfer Family"
  - id: b
    text: "Create an EC2 instance with an FTP server installed then copy the data from S3 to the EC2 instance"
  - id: c
    text: "Use AWS Storage Gateway"
  - id: d
    text: "Copy the data from S3 to an EFS file system, then expose them over the FTP protocol"
correct: ["a"]
references: []
tags: ["storage", "imported"]
status: reviewed
lastReviewed: 2026-09-24
---

## Explanation

The correct answer is **Use AWS Transfer Family**.
