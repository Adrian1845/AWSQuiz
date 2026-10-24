# DynamoDB Accelerator (DAX)

[← Índice de servicios](../../guia-estudio-saa-sdd.md) · Revisión: 2026-10-23

## Qué hace

Caché en memoria específica de DynamoDB.

## Cuándo elegirlo

Lecturas repetidas con latencia muy baja.

## Detalles que deciden la respuesta

- Caché en memoria compatible con acceso DynamoDB para patrones de lectura repetidos.
- No reemplaza diseñar una buena clave de partición ni resuelve consultas arbitrarias.

## Caso basado en escenario

**Situación:** Se repiten lecturas por clave de DynamoDB.

**Elección:** DAX. La pista decisiva es lecturas repetidas con latencia muy baja.

## Diferencia importante

ElastiCache es caché general; DAX se integra con DynamoDB.

## Fuente oficial

- [Documentación de AWS](https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/DAX.html)
