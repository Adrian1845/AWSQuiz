# Amazon Redshift

[← Índice de servicios](../../guia-estudio-saa-sdd.md) · Revisión: 2026-10-23

## Qué hace

Almacén analítico para consultas sobre grandes conjuntos de datos.

## Cuándo elegirlo

BI y análisis OLAP.

## Detalles que deciden la respuesta

- Almacén de datos columnar para agregaciones y análisis a gran escala.
- Separa cargas analíticas de transacciones operativas; puede consultar datos del lago según configuración.

## Caso basado en escenario

**Situación:** Finanzas agrega años de ventas para informes complejos.

**Elección:** Redshift. La pista decisiva es bi y análisis olap.

## Diferencia importante

RDS optimiza transacciones de aplicación; Redshift optimiza análisis e informes amplios.

## Fuente oficial

- [Documentación de AWS](https://docs.aws.amazon.com/redshift/latest/dg/welcome.html)
