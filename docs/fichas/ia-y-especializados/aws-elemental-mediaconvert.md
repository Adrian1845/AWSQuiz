# AWS Elemental MediaConvert

[← Índice de servicios](../../guia-estudio-saa-sdd.md) · Revisión: 2026-10-23

## Qué hace

Procesa archivos de vídeo para generar salidas en formatos, calidades y empaquetados adecuados a distintos dispositivos. Es el servicio vigente de AWS para transcodificación de vídeo basada en archivos.

## Cuándo elegirlo

Cuando una biblioteca de vídeo necesita generar versiones de reproducción, subtítulos, audio o formatos distintos antes de publicarlos. El trabajo puede tomar archivos de S3 y producir los resultados que después se distribuyen, por ejemplo, mediante CloudFront.

## Detalles que deciden la respuesta

- Un **job** transforma archivos de entrada en una o varias salidas; **presets** y **job templates** reutilizan configuraciones.
- **Queues** controlan cómo se procesan trabajos concurrentes. Elige la configuración de códec, calidad y salida según los dispositivos destinatarios.

## Caso basado en escenario

**Situación:** una plataforma recibe películas en un formato maestro y debe ofrecer versiones de distintas resoluciones para reproducción bajo demanda.

**Elección:** crear trabajos de **MediaConvert** para cada archivo, guardar las salidas y distribuirlas por CDN.

**Por qué:** el requisito es convertir archivos de vídeo terminados, no transportar vídeo en directo ni procesar eventos genéricos.

## Diferencia importante

[Kinesis Video Streams](amazon-kinesis-video-streams.md) ingiere flujos de vídeo; MediaConvert transforma archivos. Amazon Elastic Transcoder es un nombre histórico retirado.

## Fuente oficial

- [Qué es AWS Elemental MediaConvert](https://docs.aws.amazon.com/mediaconvert/latest/ug/what-is.html)
