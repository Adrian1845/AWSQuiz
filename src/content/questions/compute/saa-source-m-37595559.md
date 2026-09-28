---
id: saa-source-m-37595559
title: "You have provisioned a DynamoDB table with 10 RCUs and 10 WCUs. A month later you want to increase the RCU to handle more read traffic. What should you do?"
domain: compute
services: ["Lambda", "API Gateway", "Step Functions"]
difficulty: medium
type: single
choices:
  - id: a
    text: "Increase RCU and keep WCU the same"
  - id: b
    text: "You need to increase both RCU and WCU"
  - id: c
    text: "Increase RCU and decrease WCU"
correct: ["a"]
references: []
tags: ["serverless", "compute", "imported"]
status: reviewed
lastReviewed: 2026-09-24
---

## Explanation

RCU and WCU are decoupled, so you can increase/decrease each value separately.
