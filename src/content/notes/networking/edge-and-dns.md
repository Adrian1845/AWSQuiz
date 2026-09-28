---
title: Route 53, CloudFront and Global Accelerator
domain: networking
services: [Route 53, Amazon CloudFront, AWS Global Accelerator, AWS WAF, Amazon S3, Elastic Load Balancing, Amazon API Gateway]
tags: [dns, content-delivery, edge-networking, routing]
keywords: [route53, cloudfront, global-accelerator, cdn, dns, waf, origin-access-control]
---

# Route 53, CloudFront and Global Accelerator

| Service | Primary job | Decision signal |
|---|---|---|
| Route 53 | authoritative DNS, health checks, routing policies | choose endpoint by DNS answer |
| CloudFront | CDN/cache with HTTP(S) features | cache and secure web/API content at edge |
| Global Accelerator | anycast static IPs and AWS global network routing | improve TCP/UDP path to regional endpoints, not HTTP caching |

Route 53 policies include simple, weighted, latency, failover, geolocation/geoproximity, and multivalue answers. Alias records point at AWS resources and have AWS-specific behavior.

CloudFront origins can include S3, ALB, API Gateway, or custom HTTP origins. Use Origin Access Control to keep an S3 origin private. WAF at CloudFront blocks unwanted HTTP(S) requests at the edge.
