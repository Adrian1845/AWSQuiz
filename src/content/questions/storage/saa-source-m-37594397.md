---
id: saa-source-m-37594397
title: "You need to move hundreds of Terabytes into Amazon S3, then process the data using a fleet of EC2 instances. You have a 1 Gbit/s broadband. You would like to move the data faster and possibly processing it while in transit. What do you recommend?"
domain: storage
services: ["S3", "EBS", "EFS", "FSx", "DataSync", "Storage Gateway"]
difficulty: medium
type: single
choices:
  - id: a
    text: "Use your network"
  - id: b
    text: "Use Snowcone"
  - id: c
    text: "Use AWS Data Migration"
  - id: d
    text: "Use Snowball Edge"
correct: ["d"]
references: []
tags: ["storage", "imported"]
status: reviewed
lastReviewed: 2026-09-24
---

## Explanation

Snowball Edge is the right answer as it comes with computing capabilities and allows you to pre-process the data while it's being moved into Snowball.
