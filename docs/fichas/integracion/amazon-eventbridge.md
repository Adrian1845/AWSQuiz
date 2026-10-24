# Amazon EventBridge

[← Índice de servicios](../../guia-estudio-saa-sdd.md) · Revisión: 2026-10-23

## Qué hace

Bus de eventos con reglas de filtrado y destinos.

## Cuándo elegirlo

Enrutar eventos de AWS, SaaS o aplicaciones.

## Detalles que deciden la respuesta

- Rules filtran eventos por patrón y los envían a targets; admite fuentes AWS, propias y SaaS.
- Separa productores de destinos y sirve para enrutamiento según contenido de eventos.

## Opciones y límites

Un **event bus** recibe eventos; las **rules** comparan patrones y envían coincidencias a targets. El productor no necesita conocer los consumidores. Es útil para integrar eventos propios, de servicios AWS o de SaaS. La entrega puede repetirse, por lo que el destino debe tolerar duplicados. No asumas orden global de eventos. [Guía de decisión](https://docs.aws.amazon.com/decision-guides/latest/decision-guides/sns-or-sqs-or-eventbridge.html).

**Ejemplo:** `order.created` puede ir a facturación y `order.cancelled` a una compensación sin que el productor implemente lógica de enrutamiento. Si ambos destinos necesitan procesar mensajes a su propio ritmo, añade colas SQS entre bus y consumidores.

## Caso basado en escenario

**Situación:** Solo eventos `order.cancelled` deben lanzar una compensación.

**Elección:** EventBridge. La pista decisiva es enrutar eventos de aws, saas o aplicaciones.

## Diferencia importante

SNS ofrece pub/sub directo; EventBridge enfatiza reglas y enrutamiento de eventos.

## Fuente oficial

- [Documentación de AWS](https://docs.aws.amazon.com/eventbridge/latest/userguide/eb-what-is.html)
