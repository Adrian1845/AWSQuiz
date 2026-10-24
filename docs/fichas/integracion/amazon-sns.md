# Amazon SNS

[← Índice de servicios](../../guia-estudio-saa-sdd.md) · Revisión: 2026-10-23

## Qué hace

Tema de publicación y suscripción con entrega a varios destinos.

## Cuándo elegirlo

Difusión inmediata.

## Detalles que deciden la respuesta

- Un topic entrega a múltiples suscriptores como colas SQS, Lambda o endpoints.
- El patrón SNS→SQS da a cada consumidor su propia cola y política de reintentos.

## Opciones y límites

El patrón **fan-out** publica una vez en un topic y entrega a varias suscripciones. Suscribir **una cola SQS por consumidor** evita que un consumidor lento frene a los demás; cada cola retiene y reintenta su propio trabajo. Si importa el orden, estudia SNS FIFO junto con destinos FIFO compatibles. El topic no sustituye a una cola de trabajo duradera por consumidor. [SNS frente a SQS y EventBridge](https://docs.aws.amazon.com/decision-guides/latest/decision-guides/sns-or-sqs-or-eventbridge.html).

| Requisito | Primer candidato |
|---|---|
| Un productor avisa a varios receptores | SNS. |
| Un trabajo espera hasta que un consumidor lo retire | [SQS](amazon-sqs.md). |
| Reglas por contenido y muchas fuentes de eventos | [EventBridge](amazon-eventbridge.md). |

## Caso basado en escenario

**Situación:** Un pedido confirmado debe avisar a facturación y notificaciones.

**Elección:** SNS con colas independientes. La pista decisiva es difusión inmediata.

## Diferencia importante

SQS desacopla mediante almacenamiento de mensajes; SNS distribuye una publicación a varios receptores.

## Fuente oficial

- [Documentación de AWS](https://docs.aws.amazon.com/sns/latest/dg/welcome.html)
