---
title: VPC connectivity
domain: networking
services: [Amazon VPC, Transit Gateway, AWS Site-to-Site VPN, AWS Direct Connect, AWS PrivateLink, Route 53 Resolver]
tags: [hybrid-networking, private-connectivity, routing, dns]
keywords: [vpc-peering, transit-gateway, site-to-site-vpn, direct-connect, privatelink, route53-resolver]
---

# VPC connectivity

| Option | Topology / use | Key constraint |
|---|---|---|
| VPC peering | direct private VPC-to-VPC link | non-transitive; CIDRs cannot overlap |
| Transit Gateway | hub-and-spoke for many VPCs and on-premises networks | central routing and attachment design needed |
| Site-to-Site VPN | encrypted connection over internet | fast to establish; throughput/latency depend on internet and design |
| Direct Connect | dedicated private connection to AWS | takes provisioning time; traffic is private but add VPN/MACsec when encryption requirement applies |
| PrivateLink | privately expose/consume a service | service-level, not general routed network connectivity |

Use VPC Flow Logs to investigate accepted/rejected IP traffic (not every application-level reason). Route 53 Resolver endpoints handle DNS resolution between VPCs and on-premises networks.
