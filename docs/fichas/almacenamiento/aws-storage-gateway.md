# AWS Storage Gateway

[← Índice de servicios](../../guia-estudio-saa-sdd.md) · Revisión: 2026-10-23

## Qué hace

Puente entre almacenamiento local y AWS.

## Cuándo elegirlo

Acceso híbrido mediante interfaces de archivos, volúmenes o cintas.

## Detalles que deciden la respuesta

- File Gateway presenta archivos, Volume Gateway volúmenes y Tape Gateway cintas virtuales.
- Mantiene una interfaz local y mueve o respalda datos hacia almacenamiento AWS.

## Caso basado en escenario

**Situación:** Un centro de datos quiere respaldar su librería de cintas en AWS.

**Elección:** Tape Gateway. La pista decisiva es acceso híbrido mediante interfaces de archivos, volúmenes o cintas.

## Diferencia importante

DataSync copia datos; Storage Gateway mantiene una interfaz híbrida de acceso continuo.

## Fuente oficial

- [Documentación de AWS](https://docs.aws.amazon.com/storagegateway/latest/userguide/WhatIsStorageGateway.html)
