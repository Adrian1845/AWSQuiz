# Amazon DynamoDB

[← Índice de servicios](../../guia-estudio-saa-sdd.md) · Revisión: 2026-10-23

## Qué hace

Base NoSQL de clave-valor/documentos con acceso por claves.

## Cuándo elegirlo

Gran escala y latencia baja.

## Detalles que deciden la respuesta

- Diseña la tabla a partir de claves de partición/ordenación y patrones de consulta; evita depender de scans.
- On-demand y provisioned difieren en gestión de capacidad; GSI habilita accesos adicionales y TTL elimina ítems caducados.

## Opciones y límites

El primer diseño es la **clave de partición** y, si hace falta, la **clave de ordenación**. Las consultas eficientes conocen la clave de partición. Un **GSI** permite otro patrón de consulta, con almacenamiento y capacidad adicionales; un **scan** de toda la tabla suele ser una mala respuesta cuando se conoce el patrón de acceso. Para demanda impredecible considera capacidad **on-demand**; para demanda previsible puede convenir **provisioned** con auto scaling. [Conceptos básicos](https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/HowItWorks.CoreComponents.html).

| Requisito | Función relacionada |
|---|---|
| Expirar sesiones | TTL. |
| Reaccionar a cambios de ítems | DynamoDB Streams. |
| Lecturas repetidas con latencia mínima | [DAX](../complementos/dynamodb-accelerator-dax.md), si el patrón es compatible. |
| Presencia de usuarios en varias regiones con escritura local | Global tables, tras revisar conflicto y consistencia. |

## Caso basado en escenario

**Situación:** Millones de sesiones se buscan por `sessionId`.

**Elección:** DynamoDB. La pista decisiva es gran escala y latencia baja.

## Diferencia importante

RDS/Aurora convienen para joins y SQL relacional; DynamoDB para acceso conocido por clave a escala.

## Fuente oficial

- [Documentación de AWS](https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/Introduction.html)
