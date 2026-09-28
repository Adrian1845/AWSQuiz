---
title: Network filtering choices
domain: architecture
services: [AWS WAF, Elastic Load Balancing, Amazon VPC]
tags: [web-application-firewall, security-groups, network-acls, network-security]
keywords: [waf, alb, security-group, nacl, network-acl, firewall, layer-7]
---

# Network filtering choices

```mermaid
flowchart LR
  Internet --> CF[CloudFront + WAF]
  CF --> ALB[ALB security group]
  ALB --> App[App security group]
  App --> DB[DB security group]
  Subnet[NACL at subnet boundary] --- App
```

- **WAF** examines web requests and can block by IP, rate, or attack signature before they reach the origin.
- **Security groups** express permitted application flows, e.g. ALB SG to app SG on port 443 and app SG to DB SG on 5432.
- **NACLs** apply to all subnet traffic, can explicitly deny, and require both directions/ephemeral ports due to stateless behavior.

Use the narrowest control that matches the requirement: WAF for L7 HTTP policy, SGs for stateful workload reachability, and NACLs for subnet-wide stateless controls.
