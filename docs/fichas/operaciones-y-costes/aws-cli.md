# AWS CLI

[← Índice de servicios](../../guia-estudio-saa-sdd.md) · Revisión: 2026-10-23

## Qué hace

Interfaz de comandos para operar AWS.

## Cuándo elegirlo

Automatizar tareas y scripts.

## Detalles que deciden la respuesta

- Automatiza llamadas AWS con comandos y perfiles de credenciales.
- Es útil en scripts y operaciones repetibles, con IAM que limita las acciones disponibles.

## Caso basado en escenario

**Situación:** Un proceso debe crear recursos de forma repetible desde terminal.

**Elección:** AWS CLI. La pista decisiva es automatizar tareas y scripts.

## Diferencia importante

CloudFormation describe el estado deseado de conjuntos de recursos; CLI ejecuta órdenes.

## Fuente oficial

- [Documentación de AWS](https://docs.aws.amazon.com/cli/latest/userguide/cli-chap-welcome.html)
