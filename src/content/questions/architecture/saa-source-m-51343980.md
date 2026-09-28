---
id: saa-source-m-51343980
title: "A company is using RDS for MySQL as their main database but, lately they have been facing issues in managing the database, performance issues, and the scalability. And they have decided to use Aurora for MySQL instead for better performance, less complexity and less administrative tasks required. What is the best way and most cost-effective way to migrate from RDS for MySQL to Aurora for MySQL?"
domain: architecture
services: ["Route 53", "S3", "RDS", "AWS Backup"]
difficulty: medium
type: single
choices:
  - id: a
    text: "Raise an AWS support ticket to do the migration as it is not supported"
  - id: b
    text: "Create a database dump from RDS from MySQL, store it in an S3 bucket, then restore it to Aurora for MySQL"
  - id: c
    text: "You can not migrate directly to Aurora for MySQL, you have to create a custom application to insert the data manually"
  - id: d
    text: "Create a snapshot from RDS for MySQL and restore it to Aurora for MySQL"
correct: ["d"]
references: []
tags: ["disaster-recovery", "architecture", "imported"]
status: reviewed
lastReviewed: 2026-09-24
---

## Explanation

The correct answer is **Create a snapshot from RDS for MySQL and restore it to Aurora for MySQL**.
