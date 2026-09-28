---
id: saa-source-m-37594761
title: "You have a website where you want to analyze clickstream data such as the sequence of clicks a user makes, the amount of time a user spends, and where the navigation begins and how it ends. You decided to use Amazon Kinesis, so you have configured the website to send these clickstream data all the way to a Kinesis data stream. While you checking the data sent to your Kinesis data stream, you found that the users' data is not ordered and the data for one individual user is spread across many shards. How would you fix this problem?"
domain: integration
services: ["SQS", "SNS", "EventBridge", "Kinesis", "Amazon MQ"]
difficulty: medium
type: single
choices:
  - id: a
    text: "There are too many shards, you should only use 1 shard"
  - id: b
    text: "You shouldn't use multiple consumers, only one and it should re-order data"
  - id: c
    text: "For each record sent to Kinesis add a partition key that represents the identity of the user"
correct: ["c"]
references: []
tags: ["decoupling", "integration", "imported"]
status: reviewed
lastReviewed: 2026-09-24
---

## Explanation

Kinesis Data Stream uses the partition key associated with each data record to determine which shard a given data record belongs to. When you use the identity of each user as the partition key, this ensures the data for each user is ordered hence sent to the same shard.

## Why the other options are incorrect

- **There are too many shards, you should only use 1 shard:** Using 1 shard would guarantee total ordering but wouldn't allow us to scale.
- **You shouldn't use multiple consumers, only one and it should re-order data:** This wouldn't allow us to scale.
