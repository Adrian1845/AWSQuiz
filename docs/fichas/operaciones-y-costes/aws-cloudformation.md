# AWS CloudFormation

[← Índice de servicios](../../guia-estudio-saa-sdd.md) · Revisión: 2026-10-23

## Qué hace

Define infraestructura en plantillas y pilas.

## Cuándo elegirlo

Despliegues repetibles.

## Detalles que deciden la respuesta

- Plantillas describen recursos declarativos; stacks aplican cambios y registran estado.
- Change sets permiten revisar cambios propuestos antes de ejecutarlos.

## Caso basado en escenario

**Situación:** El mismo entorno debe crearse en pruebas y producción.

**Elección:** CloudFormation. La pista decisiva es despliegues repetibles.

## Diferencia importante

CLI automatiza llamadas individuales; CloudFormation gestiona una infraestructura como unidad declarativa.

## Fuente oficial

- [Documentación de AWS](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/Welcome.html)
