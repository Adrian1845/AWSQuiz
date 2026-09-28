---
id: saa-source-m-51343370
title: "A company is managing an image and video sharing platform which is used by customers around the globe. The platform is running on AWS using an S3 bucket to host both images and videos and using CloudFront as the CDN to deliver content to customers all over the world with low latency. In the last couple of months, a lot of customers have complained that they have started to see inappropriate content on the platform which started to increase in the last week. It will be very expensive and time-consuming to manually approve those images and videos by employees before its published on the platform. There is a requirement to find a solution that can automatically detect inappropriate and offensive images and videos and give you the ability to set a minimum confidence threshold for items that will be flagged and allows for manual review. Which AWS service can fit the requirement?"
domain: machine-learning
services: ["SageMaker", "Rekognition", "Comprehend", "Lex", "Polly", "Transcribe"]
difficulty: medium
type: single
choices:
  - id: a
    text: "Amazon Polly"
  - id: b
    text: "Amazon Translate"
  - id: c
    text: "Amazon Lex"
  - id: d
    text: "Amazon Rekognition"
correct: ["d"]
references: []
tags: ["machine-learning", "imported"]
status: reviewed
lastReviewed: 2026-09-24
---

## Explanation

The correct answer is **Amazon Rekognition**.
