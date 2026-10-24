# AWS Health Dashboard

[← Índice de servicios](../../guia-estudio-saa-sdd.md) · Revisión: 2026-10-23

## Qué hace

Informa eventos de AWS que afectan recursos o cuenta.

## Cuándo elegirlo

Impacto de incidencias.

## Detalles que deciden la respuesta

- Muestra eventos del proveedor y su posible impacto en recursos de la cuenta.
- Sirve para distinguir una incidencia de servicio AWS de un fallo propio.

## Caso basado en escenario

**Situación:** Se necesita ver si una incidencia AWS afecta recursos propios.

**Elección:** Health Dashboard. La pista decisiva es impacto de incidencias.

## Diferencia importante

CloudWatch observa métricas de la aplicación; Health informa eventos de AWS que la afectan.

## Fuente oficial

- [Documentación de AWS](https://docs.aws.amazon.com/health/latest/ug/what-is-aws-health.html)
