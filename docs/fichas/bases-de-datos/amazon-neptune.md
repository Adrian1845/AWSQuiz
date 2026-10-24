# Amazon Neptune

[← Índice de servicios](../../guia-estudio-saa-sdd.md) · Revisión: 2026-10-23

## Qué hace

Base de grafos administrada.

## Cuándo elegirlo

Relaciones y recorridos entre entidades.

## Detalles que deciden la respuesta

- Soporta modelos y consultas de grafos para relaciones entre entidades.
- Es útil cuando la operación central son recorridos de varios saltos y conexiones.

## Caso basado en escenario

**Situación:** Se buscan conexiones de varios saltos entre cuentas fraudulentas.

**Elección:** Neptune. La pista decisiva es relaciones y recorridos entre entidades.

## Diferencia importante

Una tabla relacional puede guardar relaciones, pero Neptune se elige por consultas de grafo como requisito dominante.

## Fuente oficial

- [Documentación de AWS](https://docs.aws.amazon.com/neptune/latest/userguide/intro.html)
