# AWS Glue

[← Índice de servicios](../../guia-estudio-saa-sdd.md) · Revisión: 2026-10-23

## Qué hace

Catálogo y preparación/integración de datos.

## Cuándo elegirlo

Descubrir esquemas y ETL.

## Detalles que deciden la respuesta

- Data Catalog almacena metadatos; crawlers descubren esquemas y jobs transforman datos.
- Los job bookmarks ayudan a procesar solo datos nuevos cuando el trabajo lo admite.

## Caso basado en escenario

**Situación:** Archivos diarios necesitan catalogación y transformación.

**Elección:** Glue. La pista decisiva es descubrir esquemas y etl.

## Diferencia importante

Athena consulta; Glue cataloga y transforma.

## Fuente oficial

- [Documentación de AWS](https://docs.aws.amazon.com/glue/latest/dg/what-is-glue.html)
