---
id: saa-source-m-37594209
title: "What does this S3 bucket policy do?

{

\"Version\": \"2012-10-17\",

\"Id\": \"Mystery policy\",

\"Statement\": [{

\"Sid\": \"What could it be?\",

\"Effect\": \"Allow\",

\"Principal\": {

\"Service\": \"cloudfront.amazonaws.com\"

},

\"Action\": \"s3:GetObject\",

\"Resource\": \"arn:aws:s3:::examplebucket/*\",

\"Condition\": {

\"StringEquals\": {

\"AWS:SourceArn\": \"arn:aws:cloudfront::123456789012:distribution/EDFDVBD6EXAMPLE\"

}

}

}]

}"
domain: networking
services: ["CloudFront", "Route 53", "Global Accelerator"]
difficulty: medium
type: single
choices:
  - id: a
    text: "Forces GetObject request to be encrypted if coming from CloudFront"
  - id: b
    text: "Only allows the S3 bucket content to be accessed from your CloudFront Distribution"
  - id: c
    text: "Only allows GetObject type of request on the S3 bucket from anybody"
correct: ["b"]
references: []
tags: ["cloudfront", "edge", "networking", "imported"]
status: reviewed
lastReviewed: 2026-09-24
---

## Explanation

The correct answer is **Only allows the S3 bucket content to be accessed from your CloudFront Distribution**.
