# Amazon RDS Proxy

[← Índice de servicios](../../guia-estudio-saa-sdd.md) · Revisión: 2026-10-23

## Qué hace

Agrupa conexiones a RDS/Aurora.

## Cuándo elegirlo

Muchas conexiones cortas desde aplicaciones.

## Detalles que deciden la respuesta

- Mantiene un pool de conexiones a RDS/Aurora y reduce aperturas masivas de conexiones.
- Es útil para Lambda u otras cargas con muchas conexiones cortas.

## Caso basado en escenario

**Situación:** Miles de invocaciones Lambda agotan conexiones de la base.

**Elección:** RDS Proxy. La pista decisiva es muchas conexiones cortas desde aplicaciones.

## Diferencia importante

Read replicas escalan consultas; RDS Proxy optimiza gestión de conexiones.

## Fuente oficial

- [Documentación de AWS](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/rds-proxy.html)
