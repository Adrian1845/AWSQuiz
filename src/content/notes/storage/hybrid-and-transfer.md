---
title: Hybrid storage and transfer
domain: storage
services: [AWS Storage Gateway, AWS DataSync, AWS Transfer Family, AWS Snow Family, Amazon S3, Amazon EFS, Amazon FSx]
tags: [hybrid-cloud, data-transfer, migration, storage]
keywords: [storage-gateway, datasync, transfer-family, snowball, snowmobile, hybrid-cloud]
---

# Hybrid storage and transfer

| Service | Purpose | Decision signal |
|---|---|---|
| Storage Gateway | bridge on-premises apps to AWS storage | file, volume, or tape interface with cloud backing |
| DataSync | online managed high-speed data transfer | move/sync large files between on-premises, S3, EFS, FSx |
| Transfer Family | managed SFTP/FTPS/FTP into S3/EFS | partners need traditional file transfer protocols |
| Snowcone/Snowball/Snowmobile | physical data transfer / edge compute | network transfer is too slow or impractical |

Estimate transfer time before choosing a truck: data size divided by usable bandwidth often makes the answer clear. Use DataSync for repeatable online transfer; Snow devices for very large offline migration.
