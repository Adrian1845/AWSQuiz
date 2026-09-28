---
id: saa-source-m-37603023
title: "As a Solutions Architect, a startup company asked you for help as they are working on an architecture for a social media website where users can be friends with each other, and like each other's posts. The company plan on performing some complicated queries such as \"What are the number of likes on the posts that have been posted by the friends of Mike?\". Which database do you recommend?"
domain: databases
services: ["RDS", "Aurora", "DynamoDB", "ElastiCache", "Redshift"]
difficulty: medium
type: single
choices:
  - id: a
    text: "Amazon RDS"
  - id: b
    text: "Amazon QLDB"
  - id: c
    text: "Amazon Neptune"
  - id: d
    text: "Amazon OpenSearch"
correct: ["c"]
references: []
tags: ["databases", "imported"]
status: reviewed
lastReviewed: 2026-09-24
---

## Explanation

Amazon Neptune is a fast, reliable, fully-managed graph database service that makes it easy to build and run applications that work with highly connected datasets.

## Why the other options are incorrect

- **Amazon RDS:** This would work, but a graph database is better suited.
- **Amazon OpenSearch:** This would work, but a graph database is better suited.
