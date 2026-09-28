---
title: Multi-region disaster recovery
domain: architecture
services: [Route 53, Elastic Load Balancing, Amazon RDS]
tags: [disaster-recovery, multi-region, rto, rpo, failover]
keywords: [route53, failover, rto, rpo, active-active, warm-standby, disaster-recovery]
---

# Multi-region disaster recovery

```mermaid
flowchart LR
  Users --> DNS[Route 53 health/failover routing]
  DNS --> A[Region A: ALB + app]
  DNS --> B[Region B: ALB + app]
  A --> Primary[(Primary data)]
  Primary -->|replication| Secondary[(Region B replica)]
  B --> Secondary
```

The DNS policy directs users toward the healthy region. Replication choice determines RPO: asynchronous cross-region replication can lose the most recent updates during a regional failure. The standby region's active capacity determines RTO: backup/restore is slowest, pilot light/warm standby faster, and active-active fastest/costliest. Test data promotion and application dependency failover, not just DNS.
