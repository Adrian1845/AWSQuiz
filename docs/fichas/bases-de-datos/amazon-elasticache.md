# Amazon ElastiCache

[← Índice de servicios](../../guia-estudio-saa-sdd.md) · Revisión: 2026-10-23

## Qué hace

Caché administrada en memoria.

## Cuándo elegirlo

Aliviar lecturas repetidas o guardar sesiones efímeras.

## Detalles que deciden la respuesta

- Mantiene datos calientes en memoria para reducir latencia y presión sobre la fuente de verdad.
- Valida expiración, invalidación y tolerancia a pérdida de caché; el dato duradero debe quedar donde corresponda.

## Caso basado en escenario

**Situación:** Un catálogo repite la misma consulta y sobrecarga RDS.

**Elección:** ElastiCache. La pista decisiva es aliviar lecturas repetidas o guardar sesiones efímeras.

## Diferencia importante

DAX se especializa en DynamoDB; ElastiCache sirve patrones de caché más generales.

## Fuente oficial

- [Documentación de AWS](https://docs.aws.amazon.com/AmazonElastiCache/latest/dg/WhatIs.html)
