# AWS Firewall Manager

[← Índice de servicios](../../guia-estudio-saa-sdd.md) · Revisión: 2026-10-23

## Qué hace

Administra políticas de protección en varias cuentas.

## Cuándo elegirlo

Aplicar reglas de forma central.

## Detalles que deciden la respuesta

- Distribuye políticas compatibles entre cuentas y recursos de una organización.
- Ayuda a detectar o remediar recursos que no cumplen la política central.

## Caso basado en escenario

**Situación:** Seguridad exige las mismas reglas WAF en todas las cuentas.

**Elección:** Firewall Manager. La pista decisiva es aplicar reglas de forma central.

## Diferencia importante

WAF, Shield y Network Firewall aplican defensas; Firewall Manager coordina su gobierno.

## Fuente oficial

- [Documentación de AWS](https://docs.aws.amazon.com/waf/latest/developerguide/fms-chapter.html)
