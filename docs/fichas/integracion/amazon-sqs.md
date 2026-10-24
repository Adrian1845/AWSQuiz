# Amazon SQS

[← Índice de servicios](../../guia-estudio-saa-sdd.md) · Revisión: 2026-10-23

## Qué hace

Cola duradera que desacopla productores y consumidores.

## Cuándo elegirlo

Absorber picos y reintentar procesamiento.

## Detalles que deciden la respuesta

- Standard favorece rendimiento y entrega al menos una vez; FIFO añade orden por grupo y deduplicación.
- Visibility timeout oculta mensajes mientras se procesan; DLQ aísla fallos repetidos. Haz consumidores idempotentes.

## Opciones y límites

| Tipo | Orden y entrega | Uso típico |
|---|---|---|
| **Standard** | Al menos una entrega; orden de mejor esfuerzo. | Mucho volumen y trabajadores idempotentes. |
| **FIFO** | Orden por grupo de mensajes y deduplicación según configuración. | Eventos que deben procesarse en secuencia por entidad. |

La **visibility timeout** oculta temporalmente un mensaje recibido; si el trabajo falla o expira, otro consumidor puede recibirlo. La **retention period** determina cuánto tiempo puede permanecer el mensaje en cola. Una **DLQ** recoge mensajes que fallan repetidamente. Ninguna de estas opciones evita por sí sola que tu lógica produzca efectos duplicados: diseña idempotencia. [Guía SQS](https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/welcome.html).

## Caso basado en escenario

**Situación:** Los pedidos llegan más rápido de lo que factura el backend.

**Elección:** SQS entre ambos. La pista decisiva es absorber picos y reintentar procesamiento.

## Diferencia importante

SNS difunde mensajes a suscriptores; SQS almacena trabajo para que consumidores lo retiren.

## Fuente oficial

- [Documentación de AWS](https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/welcome.html)
