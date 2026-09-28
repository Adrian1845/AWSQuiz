---
title: Three-tier highly available web application
domain: architecture
services: [Route 53, CloudFront, AWS WAF, Elastic Load Balancing, EC2, ECS, ElastiCache, Amazon RDS, Amazon S3]
tags: [three-tier, high-availability, multi-az, web-application]
keywords: [route53, cloudfront, waf, alb, asg, ecs, rds, elasticache, s3, multi-az]
---

# Three-tier highly available web application

```mermaid
flowchart TB
  U[Users] --> R53[Route 53]
  R53 --> CF[CloudFront + WAF]
  CF --> ALB[ALB in public subnets]
  ALB --> APP[ASG / ECS service in private subnets]
  APP --> Cache[ElastiCache]
  APP --> DB[(RDS Multi-AZ / Aurora)]
  APP --> S3[S3 objects]
```

## How to read it

1. Route 53 resolves the service name; CloudFront serves cacheable assets close to users and WAF screens HTTP requests.
2. The ALB is the regional HTTP entry point. Its public subnets are not the application servers' subnets.
3. App capacity spans AZs. Instances/tasks are replaceable and use roles, not embedded credentials.
4. ElastiCache absorbs hot reads or stores sessions. RDS/Aurora remains the durable relational system of record.
5. S3 holds objects such as uploads/static assets, avoiding local disk dependence.

The availability property comes from removing single-instance dependencies and using multi-AZ tiers, not merely from adding an Elastic IP.
