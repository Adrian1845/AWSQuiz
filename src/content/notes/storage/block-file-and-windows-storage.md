---
title: EBS, instance store, EFS and FSx
domain: storage
services: [Amazon EBS, Amazon EC2, Amazon EFS, Amazon FSx]
tags: [block-storage, file-storage, instance-store, shared-storage]
keywords: [ebs, efs, fsx, fsx-windows, fsx-lustre, instance-store, block-storage, file-storage]
---

# EBS, instance store, EFS and FSx

| Service | Storage model | Scope / attachment | Best fit |
|---|---|---|---|
| EBS | network block volume | one AZ; normally one EC2 attachment | boot disks, databases, persistent VM disks |
| Instance store | physical local block disk | tied to host lifetime | cache, scratch, buffers; data can vanish on host stop/failure |
| EFS | managed elastic NFS file system | regional; many Linux clients across AZs | shared web content, Linux shared files |
| FSx for Windows | managed Windows file server | VPC / multi-AZ options | SMB, Windows ACLs, AD integration |
| FSx for Lustre | high-performance parallel file system | linked to S3 possible | HPC, ML, media processing |
| FSx for NetApp ONTAP / OpenZFS | managed specialty file systems | feature-specific | migration / enterprise NAS requirements |

## EBS volume types

- **gp3/gp2**: general SSD for broad workloads; gp3 lets performance be configured independently of size.
- **io1/io2**: provisioned IOPS for I/O-intensive, low-latency databases; eligible io volumes support Multi-Attach in one AZ with application-level coordination.
- **st1/sc1**: HDD for throughput-oriented or cold data, not boot volumes.

Snapshots are incremental and stored durably by AWS; use them for backup, volume creation, or cross-region/cross-account copy. An AMI packages an EC2 launch template and typically EBS snapshots; it supports repeatable instances.

## Critical distinction

EBS is durable only within its AZ and provides a block device. Instance store is fastest local scratch but ephemeral. EFS is the multi-AZ shared Linux file system. Do not select EFS just because many instances exist if each needs its own independent block volume.
