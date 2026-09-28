---
id: saa-source-m-37603371
title: "You are managing the AWS account for your company, and you want to give one of the developers access to read files from an S3 bucket. You have updated the bucket policy to this, but he still can't access the files in the bucket. What is the problem?

{

\"Version\": \"2012-10-17\",

\"Statement\": [{

\"Sid\": \"AllowsRead\",

\"Effect\": \"Allow\",

\"Principal\": {

\"AWS\": \"arn:aws:iam::123456789012:user/Dave\"

},

\"Action\": \"s3:GetObject\",

\"Resource\": \"arn:aws:s3:::static-files-bucket-xxx\"

}]

}"
domain: security
services: ["IAM", "AWS Organizations", "STS"]
difficulty: medium
type: single
choices:
  - id: a
    text: "Everything is okay, he just needs to logout and login again"
  - id: b
    text: "The bucket does not contain any files yet"
  - id: c
    text: "You should change the resource to arn:aws:s3:::static-files-bucket-xxx/*, because this is an object-level permission"
correct: ["c"]
references: []
tags: ["iam", "security", "imported"]
status: reviewed
lastReviewed: 2026-09-24
---

## Explanation

The correct answer is **You should change the resource to arn:aws:s3:::static-files-bucket-xxx/*, because this is an object-level permission**.
