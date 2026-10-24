---
title: Notes
domain: all
services: [all]
tags: [all]
keywords: [all, notes]
---

# IAM
- **IAM Access Analyzer** are specifically intended for evaluating permissions and detecting resources that are accessible outside your intended scope
- **Service control policy (SCP)** is a type of organization policy that you can use to manage permissions in your organization
If a user or role has an IAM permission policy that grants access to an action that is either not allowed or explicitly denied by the applicable service control policy (SCP), the user or role can't perform that action
Service control policy (SCP) **affects all users and roles** in the member accounts, **including root** user of the member accounts
Service control policy (SCP) **does not affect service-linked role**
- **AWS CloudFormation StackSets** to deploy **CloudFormation templates** across AWS accounts and regions
# EC2
- **User data** script that runs at the first launch with root privilege
- **EBS Snapshots** they have a retention rule to prevent deletions
- Cost of test file storage on Amazon S3 Standard < Cost of test file storage on Amazon EFS < Cost of test file storage on Amazon EBS
- Only when we want to specify a **range of instances**, then we must use **min** and **max** values, otherwise we use **desired**
- **AWS Systems Manager’s Default Host Management Configuration** (part of Quick Setup) simplifies onboarding by using AWS best practices and auto-configures EC2 instances with the required SSM settings behind the scenes **without needing to alter existing IAM roles manually.**
- **Security Groups are stateful**, so allowing inbound traffic to the necessary ports enables the connection. **Network ACLs are stateless**, so you must allow both inbound and outbound traffic
- You can share an **Amazon Machine Image (AMI)** with another AWS account
Copying an Amazon Machine Image (AMI) backed by an encrypted snapshot cannot result in an unencrypted target snapshot
You can copy an Amazon Machine Image (AMI) across AWS Regions
- **SpotInstances**
When you cancel an active spot request, it does not terminate the associated instance
If a spot request is persistent, then it is opened again after your Spot Instance is interrupted
Spot Fleets can maintain target capacity by launching replacement instances after Spot Instances in the fleet are terminated
- A **recovered instance** is identical to the original instance, including the instance ID, private IP addresses, Elastic IP addresses, and all instance metadata. If your instance has a public IPv4 address, it retains the public IPv4 address after recovery
# S3
- **S3 Access Points** provide a scalable, manageable solution for managing permissions on shared buckets. By creating a dedicated access point for each service, and setting access point-level policies that scope access down to specific prefixes within the bucket, the company can enforce fine-grained, isolated access per applicatio
- **S3 Transfer Accelerator** and **multipart** to increase upload speeds
- **S3 File Gateway** is a type of AWS Storage Gateway that helps on-premises applications seamlessly access Amazon S3 as if it were a traditional file system
- **Versioning and MFA** can be actived for preventing deletions
- **Invalid** Amazon S3 Intelligent-Tiering => Amazon S3 Standard. Amazon S3 One Zone-IA => Amazon S3 Standard-IA
- Different versions of a single object can have **different retention modes** and periods. When you apply a retention period to an object version explicitly, you specify a **Retain Until Date** for the object version
- You **can't move data to Glacier** without going to standard first, so lifecycle policy
- Amazon CloudFront to send authenticated requests to Amazon S3, and configure Amazon S3 to only allow access to authenticated requests from Amazon CloudFront. Amazon CloudFront provides two ways to send authenticated requests to an Amazon S3 origin: **origin access control (OAC) and origin access identity (OAI)**
# Lambda
- Lambda now can be containered
- If you intend to reuse code in more than one AWS Lambda function, you should consider creating an AWS Lambda Layer for the reusable code
- AWS **Lambda functions** always operate from an AWS-owned VPC and hence have access to any public internet address or public AWS APIs. Once an AWS Lambda function is VPC-enabled, it will need a route through a Network Address Translation gateway (NAT gateway) in a public subnet to access public resources
- Lambda has a 1k **concurrent quota**
- A **Lambda layer** is a .zip file archive that contains supplementary code or data.
# Cognito
- **User pools** authenticate like normal, **identity pools** authenticate with social media
- Cannot be attached to Cloudfront but can attach to **ALB**
# ECS, EKS
- **EKS Pods** IAM policies cannot be directly attached to Pods using annotations. You need to create separate EKS accounts
- Amazon **ECS with EC2** launch type is charged based on EC2 instances and EBS volumes used. Amazon **ECS with Fargate** launch type is charged based on vCPU and memory resources that the containerized application requests
# SQS
- **SQS FIFO** To convert one standard SQS to FIFO you need to delete de standard and create the FIFO, making sure the name of the fifo ends with .fifo, the output does not exceed 3k msg/s and the inbound 300 msg/s (batching is allowed so input can be increased)
- Scale for spikes, use a **target tracking scaling policy** based on a custom Amazon SQS queue metric
- **Long polling** is cheaper
# Databases
- **Amazon RDS SSL** You can use Secure Socket Layer / Transport Layer Security (SSL/TLS) connections to encrypt data in transit.
- **DMS Serverless**: Desigend to replicate on-premise to cloud. AWS DMS Serverless automatically provisions and scales compute resources based on workload demand.
# Machine Learning and ETL
- **Kinesis Data Streams** for high-throughput, low-latency stream ingestion
- **Kinesis Firehose** cannot be used to process and analyze the streaming data in custom applications. It can capture, transform, and load streaming data into Amazon S3, Amazon Redshift, Amazon Elasticsearch Service, and Splunk, enabling near real-time analytics.
- **Amazon OpenSearch Service** for full-text indexing and real-time search. 
- **OpenSearch** is purpose-built for search and analytics workloads.
- For visualization, **Amazon QuickSight** can be connected to OpenSearch or other data sources to build rich dashboards. This architecture provides a scalable, fully managed, real-time search and analytics platform using AWS-native services.
- **AWS Glue crawler** can scan the files in Amazon S3, infer their schema, and create or update corresponding table definitions in the AWS Glue Data Catalog
- **Amazon Redshift Serverless** offers massively parallel processing MPP. Also supports ML as well as **Athena**
# Security
- **WAF and Cloudfront** have **Geo Restriction** but CF cannot be in a VPC
- **WAF** cannot be attached to NLB
- **AWS KMS**: Keys rotate every year.
- **SSE-S3**: Server side encription. No rotation can be configured.
- **Amazon GuardDuty** to monitor any malicious activity on data stored in Amazon S3, AWS CloudTrail Events, Amazon VPC Flow Logs, and DNS Logs. Use **Amazon Macie** to identify any sensitive data stored on Amazon S3

# Networking
- **Route53 private hosted zone**  is designed to resolve DNS names within AWS resources for domains hosted on AWS, not for external or on-premises DNS domains.
- **AWS Global Accelerator** supports UDP
- **VPC sharing and peering** Sharing is for subnets with one or multiple VPC in the same organization. Peering is VPC to VPC without transitive connection from one or more organizations.
- **Virtual Private Gateway**: 
• Internet Gateway (IGW): Conecta la VPC a internet público.
• NAT Gateway: Permite que recursos privados salgan a internet sin recibir conexiones entrantes.
• Gateway Endpoint: Enruta tráfico de forma privada a servicios específicos como Amazon S3 o DynamoDB sin salir a la red pública.
AWS-side VPN or Direct Connect endpoint for a VPC
- **Customer Gateway**: VPN to AWS
- **Transit Gateway**: AWS-side VPN for multiple VPCs or CGW
- **NAT Instance**: NAT instance can be used as a bastion server. Security Groups can be associated with a NAT instance. NAT instance supports port forwarding
- **AWS NAT (Network Address Translation) Gateway** is a fully managed service that lets resources in a private subnet connect to the outside internet or other VPCs while blocking inbound connections from the outside
- An **egress-only internet gateway** is a stateful virtual private cloud (VPC) component in AWS that lets your internal instances send outbound IPv6 traffic to the internet while completely blocking incoming connections from the internet
# Transfer
- **Transfer Family**: Allows IAM Roles as control.