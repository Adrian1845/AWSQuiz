# AWS Batch

[← Índice de servicios](../../guia-estudio-saa-sdd.md) · Revisión: 2026-10-23

## Qué hace

Planifica trabajos por lotes y aprovisiona capacidad de ejecución.

## Cuándo elegirlo

Colas de trabajos no interactivos.

## Detalles que deciden la respuesta

- Envía trabajos a colas; el planificador asigna capacidad y puede usar contenedores y diferentes tipos de cómputo.
- Es adecuado para tareas finitas, independientes y reintentables, no para atender tráfico interactivo.

## Caso basado en escenario

**Situación:** Miles de simulaciones independientes pueden esperar capacidad.

**Elección:** AWS Batch. La pista decisiva es colas de trabajos no interactivos.

## Diferencia importante

Step Functions coordina pasos de negocio; Batch administra la ejecución masiva de trabajos.

## Fuente oficial

- [Documentación de AWS](https://docs.aws.amazon.com/batch/latest/userguide/what-is-batch.html)
