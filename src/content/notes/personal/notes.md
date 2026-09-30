---
title: Notes
domain: all
services: [all]
tags: [all]
keywords: [all, notes]
---

# IAM
- **IAM Access Analyzer** are specifically intended for evaluating permissions and detecting resources that are accessible outside your intended scope
# EC2
- **User data** script that runs at the first launch with root privilege
- **EBS Snapshots** they have a retention rule to prevent deletions
- Cost of test file storage on Amazon S3 Standard < Cost of test file storage on Amazon EFS < Cost of test file storage on Amazon EBS
- Only when we want to specify a** range of instances**, then we must use **min** and **max** values, otherwise we use **desired**
# S3
- **S3 Access Points** provide a scalable, manageable solution for managing permissions on shared buckets. By creating a dedicated access point for each service, and setting access point-level policies that scope access down to specific prefixes within the bucket, the company can enforce fine-grained, isolated access per applicatio
- **S3 Transfer Accelerator** and **multipart** to increase upload speeds
- **S3 File Gateway** is a type of AWS Storage Gateway that helps on-premises applications seamlessly access Amazon S3 as if it were a traditional file system
- **Versioning and MFA** can be actived for preventing deletions
- **Invalid** Amazon S3 Intelligent-Tiering => Amazon S3 Standard. Amazon S3 One Zone-IA => Amazon S3 Standard-IA
- Different versions of a single object can have **different retention modes** and periods. When you apply a retention period to an object version explicitly, you specify a **Retain Until Date** for the object version
# Lambda
- Lambda now can be containered
- If you intend to reuse code in more than one AWS Lambda function, you should consider creating an AWS Lambda Layer for the reusable code
- AWS **Lambda functions** always operate from an AWS-owned VPC and hence have access to any public internet address or public AWS APIs. Once an AWS Lambda function is VPC-enabled, it will need a route through a Network Address Translation gateway (NAT gateway) in a public subnet to access public resources
- Lambda has a 1k **concurrent quota**
- A **Lambda layer** is a .zip file archive that contains supplementary code or data.
# ECS, EKS
- **EKS Pods** IAM policies cannot be directly attached to Pods using annotations. You need to create separate EKS accounts
- Amazon **ECS with EC2** launch type is charged based on EC2 instances and EBS volumes used. Amazon **ECS with Fargate** launch type is charged based on vCPU and memory resources that the containerized application requests
# SQS
- **SQS FIFO** To convert one standard SQS to FIFO you need to delete de standard and create the FIFO, making sure the name of the fifo ends with .fifo, the output does not exceed 3k msg/s and the inbound 300 msg/s (batching is allowed so input can be increased)
# Databases
- **Amazon RDS SSL** You can use Secure Socket Layer / Transport Layer Security (SSL/TLS) connections to encrypt data in transit.
- **DMS Serverless**: Desigend to replicate on-premise to cloud. AWS DMS Serverless automatically provisions and scales compute resources based on workload demand.
# Machine Learning and ETL
- **Kinesis Data Streams** for high-throughput, low-latency stream ingestion
- **Kinesis Firehose** cannot be used to process and analyze the streaming data in custom applications. It can capture, transform, and load streaming data into Amazon S3, Amazon Redshift, Amazon Elasticsearch Service, and Splunk, enabling near real-time analytics.
- **Amazon OpenSearch Service** for full-text indexing and real-time search. 
- **OpenSearch** is purpose-built for search and analytics workloads.
- For visualization, **Amazon QuickSight** can be connected to OpenSearch or other data sources to build rich dashboards. This architecture provides a scalable, fully managed, real-time search and analytics platform using AWS-native services.
- **AWS Glue**
- **Amazon Redshift Serverless** offers massively parallel processing MPP. Also supports ML as well as **Athena**
# Security
- **WAF and Cloudfront** have **Geo Restriction** but CF cannot be in a VPC
- **AWS KMS**: Keys rotate every year.
- **SSE-S3**: Server side encription. No rotation can be configured.
- **Amazon GuardDuty** to monitor any malicious activity on data stored in Amazon S3, AWS CloudTrail Events, Amazon VPC Flow Logs, and DNS Logs. Use **Amazon Macie** to identify any sensitive data stored on Amazon S3

# Networking
- **Route53 private hosted zone**  is designed to resolve DNS names within AWS resources for domains hosted on AWS, not for external or on-premises DNS domains.
- **AWS Global Accelerator** supports UDP
- **VPC sharing and peering** Sharing is for subnets with one or multiple VPC in the same organization. Peering is VPC to VPC without transitive connection from one or more organizations.
- **Virtual Private Gateway**: AWS-side VPN or Direct Connect endpoint for a VPC
- **Customer Gateway**: VPN to AWS
- **Transit Gateway**: AWS-side VPN for multiple VPCs or CGW
- **NAT Instance**: NAT instance can be used as a bastion server. Security Groups can be associated with a NAT instance. NAT instance supports port forwarding
# Transfer
- **Transfer Family**: Allows IAM Roles as control.