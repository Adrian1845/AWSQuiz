# AWS Secrets Manager

[← Índice de servicios](../../guia-estudio-saa-sdd.md) · Revisión: 2026-10-23

## Qué hace

Guarda secretos y facilita su rotación.

## Cuándo elegirlo

Contraseñas de bases de datos y credenciales.

## Detalles que deciden la respuesta

- Almacena valores secretos cifrados, versionados y recuperables por API.
- La rotación puede automatizarse mediante una función; las cargas deben recuperar el secreto con permisos IAM.

## Caso basado en escenario

**Situación:** Una contraseña RDS debe rotar sin guardarse en código.

**Elección:** Secrets Manager. La pista decisiva es contraseñas de bases de datos y credenciales.

## Diferencia importante

KMS cifra claves y datos; Secrets Manager administra el ciclo de vida del secreto.

## Fuente oficial

- [Documentación de AWS](https://docs.aws.amazon.com/secretsmanager/latest/userguide/intro.html)
