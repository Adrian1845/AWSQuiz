# Amazon Athena

[← Índice de servicios](../../guia-estudio-saa-sdd.md) · Revisión: 2026-10-23

## Qué hace

Consulta datos en S3 con SQL sin administrar servidores.

## Cuándo elegirlo

Análisis ad hoc del lago.

## Detalles que deciden la respuesta

- Ejecuta SQL sobre datos en S3; el catálogo de Glue puede describir tablas y particiones.
- Particionar y usar formatos columnares reduce datos escaneados y coste de consulta.

## Caso basado en escenario

**Situación:** Analistas quieren consultar logs CSV/Parquet en S3.

**Elección:** Athena. La pista decisiva es análisis ad hoc del lago.

## Diferencia importante

Redshift sirve un warehouse persistente para análisis recurrente; Athena consulta archivos del lago bajo demanda.

## Fuente oficial

- [Documentación de AWS](https://docs.aws.amazon.com/athena/latest/ug/what-is.html)
