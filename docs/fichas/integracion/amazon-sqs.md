# Amazon SQS

[← Índice de servicios](../../guia-estudio-saa-sdd.md) · Revisión: 2026-10-26

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

**"Exactly once" en un examen:** Si solo comparas Standard y FIFO y el enunciado pide evitar duplicados, FIFO suele ser la respuesta esperada. En una aplicación real, FIFO deduplica envíos durante cinco minutos, pero un consumidor puede procesar de nuevo el mismo mensaje si vence el tiempo de visibilidad antes de borrarlo. Usa una clave estable de operación en la entrada y una escritura idempotente en el backend. Standard también puede servir si aceptas entregas duplicadas y desordenadas y tu aplicación las gestiona. [Deduplicación FIFO](https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/FIFO-queues-exactly-once-processing.html) · [Reintentos](https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/designing-for-outage-recovery-scenarios.html).

## Caso basado en escenario

**Situación:** Los pedidos llegan más rápido de lo que factura el backend.

**Elección:** SQS entre ambos. La pista decisiva es absorber picos y reintentar procesamiento.

## Diferencia importante

SNS difunde mensajes a suscriptores; SQS almacena trabajo para que consumidores lo retiren.

## Fuente oficial

- [Documentación de AWS](https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/welcome.html)
