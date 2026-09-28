---
id: saa-original-015
title: "Which AWS service or feature should a financial firm select when it needs to perform occasional serverless SQL queries directly against S3 data?"
domain: data-and-analytics
services: [Amazon Athena]
difficulty: easy
type: single
choices:
  - id: a
    text: Amazon Redshift
  - id: b
    text: Amazon RDS
  - id: c
    text: Amazon Athena
  - id: d
    text: Amazon EMR
correct: [c]
references: [{ note: athena-and-glue }]
tags: [analytics,data-lake, practice-bank]
status: reviewed
lastReviewed: 2026-09-15
---

## Explanation

**Amazon Athena** is the best fit because it is designed to perform occasional serverless SQL queries directly against S3 data. The other options do not directly satisfy the stated requirement.
