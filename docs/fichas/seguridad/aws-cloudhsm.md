# AWS CloudHSM

[← Índice de servicios](../../guia-estudio-saa-sdd.md) · Revisión: 2026-10-23

## Qué hace

Módulos criptográficos dedicados administrados por el cliente.

## Cuándo elegirlo

Requisitos de control de HSM.

## Detalles que deciden la respuesta

- Proporciona HSM de un solo cliente donde se gestionan claves y operaciones criptográficas.
- Implica mayor responsabilidad operativa sobre usuarios, backups y disponibilidad del clúster.

## Caso basado en escenario

**Situación:** Una norma exige gestionar material criptográfico dentro de HSM dedicado.

**Elección:** CloudHSM. La pista decisiva es requisitos de control de hsm.

## Diferencia importante

KMS suele ser la opción administrada estándar para cifrado integrado con servicios AWS.

## Fuente oficial

- [Documentación de AWS](https://docs.aws.amazon.com/cloudhsm/latest/userguide/introduction.html)
