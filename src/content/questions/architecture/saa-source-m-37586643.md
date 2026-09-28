---
id: saa-source-m-37586643
title: "You're deploying your application to an Elastic Beanstalk environment but you notice that the deployment process is painfully slow. After reviewing the logs, you found that your dependencies are resolved on each EC2 instance each time you deploy. How can you speed up the deployment process with minimal impact?"
domain: architecture
services: []
difficulty: medium
type: single
choices:
  - id: a
    text: "Remove some dependencies in your code"
  - id: b
    text: "Place the dependencies in Amazon EFS"
  - id: c
    text: "Create a Golden AMI that contains the dependencies and use that image to launch the EC2 instances"
correct: ["c"]
references: []
tags: ["saa", "architecture", "imported"]
status: reviewed
lastReviewed: 2026-09-17
---

## Explanation

Golden AMI is an image that contains all your software, dependencies, and configurations, so that future EC2 instances can boot up quickly from that AMI.
