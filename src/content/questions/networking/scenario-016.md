---
id: saa-scenario-016
title: "A company serves a static website through CloudFront. The S3 origin must remain private so users cannot bypass CloudFront. What should be configured?"
domain: networking
services: [CloudFront Origin Access]
difficulty: hard
type: single
choices:
  - id: a
    text: CloudFront Origin Access Control and an S3 bucket policy that permits only CloudFront
  - id: b
    text: Make the S3 bucket public
  - id: c
    text: Place a NAT gateway before S3
  - id: d
    text: Use an internet gateway on the bucket
correct: [a]
references: [{ note: edge-and-dns }]
tags: [cloudfront,s3,origin-access-control,security, scenario-based]
status: reviewed
lastReviewed: 2026-09-16
---

## Explanation

**CloudFront Origin Access Control and an S3 bucket policy that permits only CloudFront** directly meets the stated technical and operational requirements. The alternatives do not provide the required behavior or are not designed for this use case.

