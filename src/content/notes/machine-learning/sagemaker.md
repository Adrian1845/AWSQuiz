---
title: Amazon SageMaker
domain: machine-learning
services: [Amazon SageMaker, Amazon S3, Amazon Aurora]
tags: [machine-learning, model-training, inference, mlops]
keywords: [sagemaker, model-training, inference, endpoints, batch-transform, mlops]
---

# Amazon SageMaker

SageMaker is the managed ML platform for the model lifecycle: notebook/development environments, training jobs, hyperparameter tuning, model artifacts, hosted endpoints, batch transform, and monitoring/governance capabilities. Training commonly reads data from S3 and writes model artifacts to S3; inference can be real-time through an endpoint or offline/batch.

Choose SageMaker when a custom model or custom training/inference control is required. Do not use it just to detect labels in an image, transcribe audio, translate text, or analyze sentiment - those have pre-trained managed AI APIs.

For production, separate training from serving, version model/data artifacts, restrict access with IAM/KMS/VPC options, and monitor inference behavior. Aurora ML integrations can invoke SageMaker-supported models from SQL for suitable prediction workflows, but database calls should not become uncontrolled high-latency model-serving paths.
