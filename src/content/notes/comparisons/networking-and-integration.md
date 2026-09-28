---
title: Networking and integration comparisons
domain: comparisons
services: [Elastic Load Balancing, Amazon VPC, Transit Gateway, SQS, SNS, EventBridge, CloudFront, Global Accelerator]
tags: [networking, integration, service-selection, private-connectivity]
keywords: [alb, nlb, gwlb, nat-gateway, vpc-endpoint, privatelink, transit-gateway, sqs, sns, eventbridge, cloudfront]
---

# Networking and integration comparisons

| Decision | Choose |
|---|---|
| HTTP routing by host/path | ALB |
| TCP/UDP, static IP / extreme L4 performance | NLB |
| firewall appliance insertion | GWLB |
| private workloads need outbound IPv4 internet | NAT Gateway |
| private S3/DynamoDB access | gateway VPC endpoint |
| private access to many AWS services | interface endpoint / PrivateLink |
| many VPC/on-premise routing hub | Transit Gateway |
| direct two-VPC connection | VPC peering |
| queue/consumer decoupling | SQS |
| push fan-out | SNS |
| event routing by content/source | EventBridge |
| cache HTTP at edge | CloudFront |
| static anycast IP / accelerate TCP/UDP to endpoints | Global Accelerator |
