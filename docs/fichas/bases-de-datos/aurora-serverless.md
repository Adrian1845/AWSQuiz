# Aurora Serverless

[← Índice de servicios](../../guia-estudio-saa-sdd.md) · Revisión: 2026-10-23

## Qué hace

Capacidad Aurora que se ajusta a demanda.

## Cuándo elegirlo

Carga relacional variable o difícil de prever.

## Detalles que deciden la respuesta

- Ajusta capacidad de cómputo Aurora sin dimensionar una instancia fija para toda la carga.
- La elección depende del patrón variable, compatibilidad y requisitos de la versión disponible.

## Caso basado en escenario

**Situación:** Una app SQL tiene periodos de poca actividad y picos variables.

**Elección:** Aurora Serverless. La pista decisiva es carga relacional variable o difícil de prever.

## Diferencia importante

No es NoSQL ni elimina SQL: sigue siendo Aurora relacional.

## Fuente oficial

- [Documentación de AWS](https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/aurora-serverless.html)
