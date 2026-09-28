---
id: saa-source-m-47638976
title: "A company would like to implement a chatbot that will convert speech-to-text and recognize the customers' intentions. What service should it use?"
domain: machine-learning
services: ["SageMaker", "Rekognition", "Comprehend", "Lex", "Polly", "Transcribe"]
difficulty: medium
type: single
choices:
  - id: a
    text: "Transcribe"
  - id: b
    text: "Rekognition"
  - id: c
    text: "Connect"
  - id: d
    text: "Lex"
correct: ["d"]
references: []
tags: ["machine-learning", "imported"]
status: reviewed
lastReviewed: 2026-09-24
---

## Explanation

Amazon Lex is a service for building conversational interfaces into any application using voice and text. Lex provides the advanced deep learning functionalities of automatic speech recognition (ASR) for converting speech to text, and natural language understanding (NLU) to recognize the intent of the text, to enable you to build applications with highly engaging user experiences and lifelike conversational interactions.

## Why the other options are incorrect

- **Transcribe:** Amazon Transcribe is an AWS service that makes it easy for customers to convert speech-to-text. However, it does not have natural language understanding.
- **Rekognition:** Amazon Rekognition makes it easy to add image and video analysis to your applications using proven, highly scalable, deep learning technology that requires no machine learning expertise to use.
- **Connect:** Amazon Connect is a self-service, cloud-based contact center service that makes it easy for any business to deliver better customer service at lower cost. It does not provide speech-to-text conversion or natural language understanding.
