# AWS Directory Service

[← Índice de servicios](../../guia-estudio-saa-sdd.md) · Revisión: 2026-10-23

## Qué hace

Servicios de directorio compatibles con Microsoft AD y otros casos.

## Cuándo elegirlo

Cargas que dependen de AD.

## Detalles que deciden la respuesta

- Ofrece variantes para usar Microsoft Active Directory o conectar un directorio existente.
- Selecciona la modalidad por necesidad de dominio, confianza y operación de usuarios.

## Caso basado en escenario

**Situación:** Servidores Windows en AWS deben unirse a un dominio administrado.

**Elección:** Directory Service. La pista decisiva es cargas que dependen de ad.

## Diferencia importante

Identity Center centraliza inicio de sesión a AWS; Directory Service responde a dependencias de directorio en aplicaciones.

## Fuente oficial

- [Documentación de AWS](https://docs.aws.amazon.com/directoryservice/latest/admin-guide/what_is.html)
