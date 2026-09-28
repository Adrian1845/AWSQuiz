---
title: Monitoring and audit quick reference
domain: operations
services: [Amazon CloudWatch, AWS CloudTrail, AWS Config, AWS X-Ray, AWS Trusted Advisor]
tags: [monitoring, audit, observability, compliance]
keywords: [cloudwatch, cloudtrail, config, x-ray, trusted-advisor, logs, audit]
---

# Monitoring and audit quick reference

| Service | Answers |
|---|---|
| CloudWatch | what are resources/app metrics and logs doing now? |
| CloudTrail | who called which AWS API, from where, and when? |
| AWS Config | what configuration existed and is it compliant? |
| X-Ray | where is latency/error within a distributed request? |
| Trusted Advisor | what high-level checks/recommendations apply? |

CloudWatch alarms can trigger actions such as Auto Scaling or SNS. CloudWatch Logs is where applications and services publish logs; metric filters derive metrics from log patterns. CloudTrail event history is API audit, not application logging.

For configuration change history and compliance, use Config. For a full decision guide, sources, retention, querying, cross-account centralization, and troubleshooting notes, see [Observability](observability.md).
