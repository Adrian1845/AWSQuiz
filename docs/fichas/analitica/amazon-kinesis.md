# Amazon Kinesis

[← Índice de servicios](../../guia-estudio-saa-sdd.md) · Revisión: 2026-10-23

## Qué hace

Familia para capturar y procesar flujos de datos.

## Cuándo elegirlo

Eventos en tiempo real.

## Detalles que deciden la respuesta

- Data Streams entrega registros a consumidores que procesan un flujo en tiempo real.
- Particiones y retención influyen en escalado, orden por clave y reprocesamiento.

## Opciones y límites

En **Kinesis Data Streams**, productores escriben registros y consumidores los procesan; una *partition key* influye en el shard que recibe el registro y en el orden relativo de una misma clave. La retención permite releer registros durante la ventana configurada. Ajusta capacidad y paralelismo al flujo, no solo al volumen total. [Conceptos de Data Streams](https://docs.aws.amazon.com/streams/latest/dev/key-concepts.html).

| Requisito | Elección inicial |
|---|---|
| Aplicaciones propias consumen y reprocesan flujo | Kinesis Data Streams. |
| Solo hay que entregar el flujo a S3/Redshift/OpenSearch | [Amazon Data Firehose](amazon-data-firehose.md). |
| Compatibilidad con productores y consumidores Kafka | [Amazon MSK](amazon-msk.md). |

## Caso basado en escenario

**Situación:** Sensores envían telemetría continua que varios consumidores procesan.

**Elección:** Kinesis Data Streams. La pista decisiva es eventos en tiempo real.

## Diferencia importante

Data Firehose entrega datos a destinos; Data Streams permite consumidores propios y procesamiento continuo.

## Fuente oficial

- [Documentación de AWS](https://docs.aws.amazon.com/streams/latest/dev/introduction.html)
