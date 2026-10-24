# AWS CloudTrail

[← Índice de servicios](../../guia-estudio-saa-sdd.md) · Revisión: 2026-10-23

## Qué hace

Registra actividad de API y cuenta.

## Cuándo elegirlo

Auditoría de quién hizo una acción.

## Detalles que deciden la respuesta

- Event history y trails registran acciones API y actividad de cuenta según configuración.
- Útil para auditoría, investigación y saber actor, momento y acción.

## Caso basado en escenario

**Situación:** Hay que saber quién cambió una política IAM.

**Elección:** CloudTrail. La pista decisiva es auditoría de quién hizo una acción.

## Diferencia importante

CloudWatch captura métricas y logs operativos; CloudTrail captura actividad de API.

## Fuente oficial

- [Documentación de AWS](https://docs.aws.amazon.com/awscloudtrail/latest/userguide/cloudtrail-user-guide.html)
