---
id: saa-source-m-37594077
title: "You are looking to build an index of your files in S3, using Amazon RDS PostgreSQL. To build this index, it is necessary to read the first 250 bytes of each object in S3, which contains some metadata about the content of the file itself. There are over 100,000 files in your S3 bucket, amounting to 50 TB of data. How can you build this index efficiently?"
domain: storage
services: ["S3"]
difficulty: medium
type: single
choices:
  - id: a
    text: "Use the RDS Import feature to load the data from S3 to PostgreSQL, and run a SQL query to build the index"
  - id: b
    text: "Create an application that will traverse the S3 bucket, read all the files one by one, extract the first 250 bytes, and store that information in RDS"
  - id: c
    text: "Create an application that will traverse the S3 bucket, issue a Byte Range Fetch for the first 250 bytes, and store that information in RDS"
  - id: d
    text: "Create an application that will traverse the S3 bucket, use Athena to get the first 250 bytes, and store that information in RDS"
correct: ["c"]
references: []
tags: ["s3", "storage", "imported"]
status: reviewed
lastReviewed: 2026-09-17
---

## Explanation

The correct answer is **Create an application that will traverse the S3 bucket, issue a Byte Range Fetch for the first 250 bytes, and store that information in RDS**.
