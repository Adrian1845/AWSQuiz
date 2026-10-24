# Clases S3 Glacier

[← Índice de servicios](../../guia-estudio-saa-sdd.md) · Revisión: 2026-10-23

## Qué hace

Clases de S3 para datos archivados o raramente consultados.

## Cuándo elegirlo

Conservar datos con menor coste según tiempo de recuperación.

## Detalles que deciden la respuesta

- Instant Retrieval mantiene acceso inmediato; Flexible Retrieval y Deep Archive requieren restaurar objetos antes del acceso.
- Evalúa duración mínima, cargos de recuperación y tiempo aceptable de espera además del precio de almacenamiento.

## Caso basado en escenario

**Situación:** Registros legales de años pueden tardar horas en recuperarse.

**Elección:** S3 Glacier Deep Archive. La pista decisiva es conservar datos con menor coste según tiempo de recuperación.

## Diferencia importante

Glacier es un conjunto de clases S3 en este contexto; S3 Standard/IA sirven mejor cuando el acceso es frecuente o inmediato.

## Fuente oficial

- [Documentación de AWS](https://docs.aws.amazon.com/AmazonS3/latest/userguide/storage-class-intro.html)
