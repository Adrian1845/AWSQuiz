---
id: saa-source-m-37491698
title: "You are preparing to launch an application that will be hosted on a set of EC2 instances. This application needs some software installation and some OS packages need to be updated during the first launch. What is the best way to achieve this when you launch the EC2 instances?"
domain: compute
services: ["EC2"]
difficulty: medium
type: single
choices:
  - id: a
    text: "Connect to each EC2 instance using SSH, then install the required software and update your OS packages manually"
  - id: b
    text: "Write a bash script that installs the required software and updates to your OS, then contact AWS Support and provide them with the script. They will run it on your EC2 instances at launch"
  - id: c
    text: "Write a bash script that installs the required software and updates to your OS, then use this script in EC2 User Data when you launch your EC2 instances"
correct: ["c"]
references: []
tags: ["ec2", "imported"]
status: reviewed
lastReviewed: 2026-09-17
---

## Explanation

EC2 User Data is used to bootstrap your EC2 instances using a bash script. This script can contain commands such as installing software/packages, download files from the Internet, or anything you want.

## Why the other options are incorrect

- **Connect to each EC2 instance using SSH, then install the required software and update your OS packages manually:** This can be done, but a lot of work to do that takes a lot of time especially if your application will be hosted on a large number of EC2 instances.
- **Write a bash script that installs the required software and updates to your OS, then contact AWS Support and provide them with the script. They will run it on your EC2 instances at launch:** There's no such thing. You can't contact AWS Support to install software and packages on your EC2 instances.
