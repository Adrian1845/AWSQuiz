# Amazon MQ

[← Índice de servicios](../../guia-estudio-saa-sdd.md) · Revisión: 2026-10-23

## Qué hace

Bróker administrado compatible con protocolos de mensajería tradicionales.

## Cuándo elegirlo

Migraciones que requieren esos protocolos.

## Detalles que deciden la respuesta

- Administra brokers para protocolos y clientes de mensajería existentes.
- Reduce cambios de código en migraciones que dependen de AMQP, MQTT u otros protocolos compatibles.

## Caso basado en escenario

**Situación:** Una app heredada habla AMQP y no se puede reescribir aún.

**Elección:** Amazon MQ. La pista decisiva es migraciones que requieren esos protocolos.

## Diferencia importante

SQS/SNS son servicios nativos con APIs diferentes; MQ conserva protocolos de broker.

## Fuente oficial

- [Documentación de AWS](https://docs.aws.amazon.com/amazon-mq/latest/developer-guide/welcome.html)
