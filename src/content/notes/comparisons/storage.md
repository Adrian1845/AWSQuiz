---
title: Storage comparisons
domain: comparisons
services: [Amazon S3, Amazon EBS, Amazon EFS, Amazon FSx, AWS DataSync, AWS Snow Family]
tags: [storage, service-selection, object-storage, file-storage]
keywords: [s3, ebs, efs, fsx, instance-store, datasync, snowball, storage-gateway]
---

# Storage comparisons

| Need | Service |
|---|---|
| durable object, data lake, static asset | S3 |
| VM disk / low-latency block volume | EBS |
| temporary host-local scratch | Instance store |
| shared POSIX Linux filesystem across AZs | EFS |
| managed SMB Windows filesystem | FSx for Windows |
| HPC parallel filesystem, S3 integration | FSx for Lustre |
| offline petabyte-scale transfer | Snow family |
| recurring online file transfer | DataSync |

S3's availability/durability model does not turn it into a mounted file system; EFS's shared file semantics do not turn it into an object store.
