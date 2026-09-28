---
id: saa-source-m-37604485
title: "You have an on-premises Oracle database that you want to migrate to AWS, specifically to Amazon Aurora. How would you do the migration?"
domain: architecture
services: ["Route 53", "S3", "RDS", "AWS Backup"]
difficulty: medium
type: single
choices:
  - id: a
    text: "Use AWS Schema Conversion Tool (AWS SCT) to convert the database schema, then use AWS Database Migration Service (AWS DMS) to migrate the data"
  - id: b
    text: "Use AWS Database Migration Service (AWS DMS) to convert the database schema, then use AWS Schema Conversion Tool (AWS SCT) to migrate the data"
correct: ["a"]
references: []
tags: ["disaster-recovery", "architecture", "imported"]
status: reviewed
lastReviewed: 2026-09-24
---

## Explanation

The correct answer is **Use AWS Schema Conversion Tool (AWS SCT) to convert the database schema, then use AWS Database Migration Service (AWS DMS) to migrate the data**.
