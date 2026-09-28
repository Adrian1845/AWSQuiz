---
id: saa-ebs-001
title: "A workload stores data on Amazon EBS volumes. The team needs point-in-time backups that can be copied to another AWS Region. Which two actions should they take?"
domain: storage
services: [EC2, EBS]
difficulty: medium
type: multiple
choices:
  - id: a
    text: Create EBS snapshots
  - id: b
    text: Copy the snapshots to the destination Region
  - id: c
    text: Create an AMI in the destination Region only
  - id: d
    text: Enable EBS Multi-Attach
correct: [a, b]
references: [{ note: ebs, section: snapshots }]
tags: [backup, disaster-recovery]
status: reviewed
lastReviewed: 2026-09-14
---

## Explanation

EBS snapshots are point-in-time backups. You can copy a snapshot to another Region and then create volumes there. Multi-Attach does not create a backup.
