# Amazon CloudWatch

[← Índice de servicios](../../guia-estudio-saa-sdd.md) · Revisión: 2026-10-23

## Qué hace

Métricas, logs, alarmas y paneles operativos.

## Cuándo elegirlo

Monitorizar cargas.

## Detalles que deciden la respuesta

- Métricas y alarmas observan estado; Logs almacena y consulta registros operativos.
- Usa dashboards para correlacionar señales y alarmas para activar notificaciones o acciones.

## Caso basado en escenario

**Situación:** CPU alta durante 10 minutos debe avisar al equipo.

**Elección:** CloudWatch alarm. La pista decisiva es monitorizar cargas.

## Diferencia importante

CloudTrail responde quién hizo una llamada API; CloudWatch responde cómo se comporta la carga.

## Fuente oficial

- [Documentación de AWS](https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/WhatIsCloudWatch.html)
