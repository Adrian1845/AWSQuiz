# AWS KMS

[← Índice de servicios](../../guia-estudio-saa-sdd.md) · Revisión: 2026-10-23

## Qué hace

Crea y controla claves usadas por servicios AWS para cifrado.

## Cuándo elegirlo

Gobierno de claves y permisos.

## Detalles que deciden la respuesta

- Las claves KMS y sus políticas controlan quién puede cifrar, descifrar o generar claves de datos.
- SSE-KMS integra servicios como S3 y EBS; considera cuotas, permisos y coste de solicitudes.

## Caso basado en escenario

**Situación:** Un bucket requiere cifrado con clave controlada por la organización.

**Elección:** KMS. La pista decisiva es gobierno de claves y permisos.

## Diferencia importante

CloudHSM proporciona HSM dedicado cuando se requiere controlar el módulo criptográfico de otra forma.

## Fuente oficial

- [Documentación de AWS](https://docs.aws.amazon.com/kms/latest/developerguide/overview.html)
