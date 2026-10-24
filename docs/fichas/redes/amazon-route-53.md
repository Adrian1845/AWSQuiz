# Amazon Route 53

[← Índice de servicios](../../guia-estudio-saa-sdd.md) · Revisión: 2026-10-23

## Qué hace

DNS y políticas de enrutamiento con comprobaciones de salud.

## Cuándo elegirlo

Dirigir usuarios a endpoints.

## Detalles que deciden la respuesta

- Registros y políticas incluyen simple, weighted, latency, failover y geolocation según requisito.
- Las health checks ayudan a retirar endpoints no sanos, pero DNS depende de cachés y TTL.

## Caso basado en escenario

**Situación:** El dominio debe cambiar a región secundaria al fallar la primaria.

**Elección:** Route 53 failover. La pista decisiva es dirigir usuarios a endpoints.

## Diferencia importante

CloudFront entrega contenido; Route 53 dirige consultas DNS hacia destinos.

## Fuente oficial

- [Documentación de AWS](https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/Welcome.html)
