# Amazon Keyspaces

[← Índice de servicios](../../guia-estudio-saa-sdd.md) · Revisión: 2026-10-23

## Qué hace

Servicio compatible con Apache Cassandra.

## Cuándo elegirlo

Cargas Cassandra administradas.

## Detalles que deciden la respuesta

- Expone una API compatible con Apache Cassandra como servicio administrado.
- Encaja cuando el código y el modelo existentes ya usan CQL/Cassandra.

## Caso basado en escenario

**Situación:** Una app Cassandra necesita dejar de operar su clúster.

**Elección:** Keyspaces. La pista decisiva es cargas cassandra administradas.

## Diferencia importante

DynamoDB puede resolver clave-valor, pero no conserva la misma API Cassandra.

## Fuente oficial

- [Documentación de AWS](https://docs.aws.amazon.com/keyspaces/latest/devguide/what-is-keyspaces.html)
