---
title: Managed AI APIs
domain: machine-learning
services: [Amazon Rekognition, Amazon Textract, Amazon Comprehend, Amazon Transcribe, Amazon Polly, Amazon Translate, Amazon Lex, Amazon Kendra]
tags: [artificial-intelligence, machine-learning, managed-services, service-selection]
keywords: [rekognition, textract, comprehend, transcribe, polly, translate, lex, kendra]
---

# Managed AI APIs

| Service | Primary capability | Typical input/output |
|---|---|---|
| Rekognition | image/video analysis, labels, faces, moderation | image/video to labels/metadata |
| Textract | extract text/forms/tables from documents | document to structured text/data |
| Comprehend | NLP: entities, key phrases, sentiment | text to NLP insights |
| Transcribe | speech to text | audio to transcript |
| Polly | text to lifelike speech | text to audio |
| Translate | neural language translation | text to translated text |
| Lex | conversational chatbot interface | text/voice to intents/dialog |
| Kendra | enterprise intelligent search | documents to searchable answers/results |

These services expose managed models through APIs. The service-selection clue is the input modality and required output: document form extraction points to Textract, generic OCR/visual labels to Rekognition, sentiment/entities to Comprehend, and spoken-language conversion to Transcribe/Polly. Use SageMaker instead when the standard model/capability is insufficient and you must train or host a custom model.
