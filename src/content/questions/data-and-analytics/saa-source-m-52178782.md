---
id: saa-source-m-52178782
title: "Which AWS service is most appropriate when you want to perform real-time analytics on streams of data?"
domain: data-and-analytics
services: ["Athena", "Glue", "EMR", "Kinesis", "Redshift"]
difficulty: medium
type: single
choices:
  - id: a
    text: "Amazon SQS"
  - id: b
    text: "Amazon SNS"
  - id: c
    text: "Amazon Kinesis Data Analytics"
  - id: d
    text: "Amazon Kinesis Data Firehose"
correct: ["c"]
references: []
tags: ["data-analytics", "imported"]
status: reviewed
lastReviewed: 2026-09-24
---

## Explanation

Use Kinesis Data Analytics with Kinesis Data Streams as the underlying source of data.
