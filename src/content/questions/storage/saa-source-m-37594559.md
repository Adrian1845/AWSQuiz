---
id: saa-source-m-37594559
title: "Which of the following protocols is NOT supported by AWS Transfer Family?"
domain: storage
services: ["S3", "EBS", "EFS", "FSx", "DataSync", "Storage Gateway"]
difficulty: medium
type: single
choices:
  - id: a
    text: "File Transfer Protocol (FTP)"
  - id: b
    text: "File Transfer Protocol over SSL (FTPS)"
  - id: c
    text: "Secure Shell Protocol (SSH)"
  - id: d
    text: "Secure File Transfer Protocol (SFTP)"
correct: ["c"]
references: []
tags: ["storage", "imported"]
status: reviewed
lastReviewed: 2026-09-24
---

## Explanation

AWS Transfer Family is a managed service for file transfers into and out of S3 or EFS using the FTP protocol, thus SSH is not supported.
