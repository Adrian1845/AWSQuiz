# AWS Step Functions

[← Índice de servicios](../../guia-estudio-saa-sdd.md) · Revisión: 2026-10-23

## Qué hace

Orquesta pasos, estados, reintentos y ramas de un proceso.

## Cuándo elegirlo

Flujos de trabajo explícitos.

## Detalles que deciden la respuesta

- State machines modelan secuencia, ramas, esperas, reintentos y manejo de errores.
- Puede coordinar Lambda, Batch y otros servicios sin esconder el estado del proceso en código.

## Caso basado en escenario

**Situación:** Validar pago, reservar inventario y compensar errores exige un flujo.

**Elección:** Step Functions. La pista decisiva es flujos de trabajo explícitos.

## Diferencia importante

EventBridge enruta un evento; Step Functions sigue y controla un flujo de múltiples pasos.

## Fuente oficial

- [Documentación de AWS](https://docs.aws.amazon.com/step-functions/latest/dg/welcome.html)
