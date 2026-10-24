# AWS X-Ray

[← Índice de servicios](../../guia-estudio-saa-sdd.md) · Revisión: 2026-10-23

## Qué hace

Trazas de solicitudes distribuidas.

## Cuándo elegirlo

Localizar latencia entre servicios.

## Detalles que deciden la respuesta

- Instrumenta trazas distribuidas para seguir peticiones entre componentes.
- Analiza segmentos, errores y latencia para encontrar el tramo lento.

## Caso basado en escenario

**Situación:** Una petición atraviesa API Gateway, Lambda y DynamoDB y es lenta.

**Elección:** X-Ray. La pista decisiva es localizar latencia entre servicios.

## Diferencia importante

CloudWatch agrega métricas y logs; X-Ray sigue una solicitud concreta de extremo a extremo.

## Fuente oficial

- [Documentación de AWS](https://docs.aws.amazon.com/xray/latest/devguide/aws-xray.html)
