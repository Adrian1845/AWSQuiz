---
id: saa-source-m-51342396
title: "A company is running Amazon S3 File Gateway to host their data on S3 buckets and is able to mount them on-premises using SMB. The data currently is hosted on S3 Standard storage class and there is a requirement to reduce the costs for S3. So, they have decided to migrate some of those data to S3 Glacier. What is the most efficient way they can use to move the data to S3 Glacier automatically?"
domain: storage
services: ["S3", "EBS", "EFS", "FSx", "DataSync", "Storage Gateway"]
difficulty: medium
type: single
choices:
  - id: a
    text: "Create a Lambda function to migrate data to S3 Glacier and periodically trigger it every day using Amazon EventBridge"
  - id: b
    text: "Use S3 Batch Operations to loop through S3 files and move them to S3 Glacier every day"
  - id: c
    text: "Use S3 Lifecycle Policy"
  - id: d
    text: "Use AWS DataSync to replicate data to S3 Glacier every day"
  - id: e
    text: "Configure S3 File Gateway to send the data to S3 Glacier directly"
correct: ["c"]
references: []
tags: ["storage", "imported"]
status: reviewed
lastReviewed: 2026-09-24
---

## Explanation

The correct answer is **Use S3 Lifecycle Policy**.
