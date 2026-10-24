# AWS Backup

[← Índice de servicios](../../guia-estudio-saa-sdd.md) · Revisión: 2026-10-23

## Qué hace

Políticas centralizadas de copia y retención para recursos compatibles.

## Cuándo elegirlo

Copias entre cuentas o servicios.

## Detalles que deciden la respuesta

- Planes de backup definen frecuencia, retención y recursos; vaults guardan puntos de recuperación.
- Admite políticas centralizadas y protección entre cuentas/regiones cuando el recurso es compatible.

## Caso basado en escenario

**Situación:** Se exige una política común de backups y auditoría.

**Elección:** AWS Backup. La pista decisiva es copias entre cuentas o servicios.

## Diferencia importante

Una snapshot individual no sustituye por sí sola una política central de backups.

## Fuente oficial

- [Documentación de AWS](https://docs.aws.amazon.com/aws-backup/latest/devguide/whatisbackup.html)
