---
id: saa-source-m-54724740
title: "You have on-premises sensitive files and documents that you want to regularly synchronize to AWS to keep another copy. Which AWS service can help you with that?"
domain: storage
services: ["S3", "EBS", "EFS", "FSx", "DataSync", "Storage Gateway"]
difficulty: medium
type: single
choices:
  - id: a
    text: "AWS Database Migration Service"
  - id: b
    text: "Amazon EFS"
  - id: c
    text: "AWS DataSync"
correct: ["c"]
references: []
tags: ["storage", "imported"]
status: reviewed
lastReviewed: 2026-09-24
---

## Explanation

AWS DataSync is an online data transfer service that simplifies, automates, and accelerates moving data between on-premises storage systems and AWS Storage services, as well as between AWS Storage services.

## Why the other options are incorrect

- **AWS Database Migration Service:** AWS Database Migration Service (AWS DMS) helps you migrate databases to AWS quickly and securely.
- **Amazon EFS:** Amazon EFS provides a simple, serverless, set-and-forget elastic file system for use with AWS and on-premises resources.
