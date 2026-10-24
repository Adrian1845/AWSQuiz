# AWS IAM

[← Índice de servicios](../../guia-estudio-saa-sdd.md) · Revisión: 2026-10-23

## Qué hace

Identidades, roles y políticas para acceso a recursos AWS.

## Cuándo elegirlo

Permisos de mínimo privilegio.

## Detalles que deciden la respuesta

- Una policy define acciones, recursos y condiciones; un rol entrega credenciales temporales a cargas o personas.
- Evalúa denegaciones explícitas, permisos de identidad, políticas de recurso y límites organizativos.

## Caso basado en escenario

**Situación:** Una Lambda necesita leer un bucket sin claves embebidas.

**Elección:** rol de IAM. La pista decisiva es permisos de mínimo privilegio.

## Diferencia importante

IAM gobierna acceso a AWS; Cognito resuelve identidad de usuarios de aplicaciones.

## Fuente oficial

- [Documentación de AWS](https://docs.aws.amazon.com/IAM/latest/UserGuide/introduction.html)
