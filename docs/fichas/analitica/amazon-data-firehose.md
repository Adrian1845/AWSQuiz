# Amazon Data Firehose

[← Índice de servicios](../../guia-estudio-saa-sdd.md) · Revisión: 2026-10-23

## Qué hace

Entrega flujos a destinos como S3 o Redshift con poca gestión.

## Cuándo elegirlo

Ingesta continua hacia almacenamiento.

## Detalles que deciden la respuesta

- Recibe datos en flujo y los entrega a destinos admitidos con buffering y transformación opcional.
- Minimiza operación de consumidores cuando el objetivo es depositar el flujo en un destino.

## Caso basado en escenario

**Situación:** Logs de aplicaciones deben terminar automáticamente en S3.

**Elección:** Data Firehose. La pista decisiva es ingesta continua hacia almacenamiento.

## Diferencia importante

Kinesis Data Streams da control a consumidores y retención para reproceso; Firehose prioriza entrega administrada.

## Fuente oficial

- [Documentación de AWS](https://docs.aws.amazon.com/firehose/latest/dev/what-is-this-service.html)
