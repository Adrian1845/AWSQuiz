# AWS Config

[← Índice de servicios](../../guia-estudio-saa-sdd.md) · Revisión: 2026-10-23

## Qué hace

Registra configuraciones y evalúa reglas de conformidad.

## Cuándo elegirlo

Detectar cambios no conformes.

## Detalles que deciden la respuesta

- Registra estado y cambios de configuración de recursos compatibles.
- Las reglas evalúan cumplimiento; el historial ayuda a ubicar cuándo cambió un recurso.

## Caso basado en escenario

**Situación:** Se necesita saber cuándo un bucket dejó de cumplir una regla.

**Elección:** Config. La pista decisiva es detectar cambios no conformes.

## Diferencia importante

CloudTrail revela la acción API y su actor; Config muestra el estado de configuración resultante.

## Fuente oficial

- [Documentación de AWS](https://docs.aws.amazon.com/config/latest/developerguide/WhatIsConfig.html)
