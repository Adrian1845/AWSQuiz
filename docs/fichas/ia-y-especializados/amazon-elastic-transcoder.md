# Amazon Elastic Transcoder

[← Índice de servicios](../../guia-estudio-saa-sdd.md) · Revisión: 2026-10-23

> **Servicio retirado.** AWS lo apagó el 13 de noviembre de 2025. Permanece en el índice porque la lista SAA-C03 aún lo menciona; no debe elegirse para una arquitectura nueva. [Estado oficial](https://docs.aws.amazon.com/general/latest/gr/full_shutdown_services.html).

## Qué hace

Transcodificación de medios.

## Cuándo elegirlo

No elegirlo para cargas nuevas: se usaba para convertir formatos de vídeo/audio, pero fue retirado. Para una carga actual basada en archivos, estudia [AWS Elemental MediaConvert](aws-elemental-mediaconvert.md).

## Detalles que deciden la respuesta

- Convierte archivos de audio y vídeo entre formatos admitidos.
- En preguntas, la pista es un flujo de conversión de medios existente, no streaming de eventos genéricos.

## Caso basado en escenario

**Situación:** Un archivo de vídeo requiere otro formato de reproducción.

**Elección actual:** AWS Elemental MediaConvert. Elastic Transcoder aparece como nombre histórico, pero el servicio ya no está disponible.

## Diferencia importante

Kinesis Video Streams ingiere vídeo continuo; MediaConvert transforma archivos de medios.

## Fuente oficial

- [Cierre de Elastic Transcoder](https://docs.aws.amazon.com/general/latest/gr/full_shutdown_services.html)
- [MediaConvert](https://docs.aws.amazon.com/mediaconvert/latest/ug/what-is.html)
