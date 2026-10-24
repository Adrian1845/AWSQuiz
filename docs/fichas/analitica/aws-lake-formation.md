# AWS Lake Formation

[← Índice de servicios](../../guia-estudio-saa-sdd.md) · Revisión: 2026-10-23

## Qué hace

Configura y gobierna acceso a un lago de datos.

## Cuándo elegirlo

Permisos granulares sobre datos compartidos.

## Detalles que deciden la respuesta

- Centraliza permisos y configuración de un data lake sobre servicios de almacenamiento y análisis.
- Facilita compartir tablas y controlar accesos finos entre equipos.

## Caso basado en escenario

**Situación:** Varios equipos consultan el lago con permisos por tabla o columna.

**Elección:** Lake Formation. La pista decisiva es permisos granulares sobre datos compartidos.

## Diferencia importante

Glue Catalog describe datos; Lake Formation añade gobierno de acceso al lago.

## Fuente oficial

- [Documentación de AWS](https://docs.aws.amazon.com/lake-formation/latest/dg/what-is-lake-formation.html)
