# AWS Auto Scaling

[← Índice de servicios](../../guia-estudio-saa-sdd.md) · Revisión: 2026-10-23

## Qué hace

Planifica el escalado de recursos compatibles entre servicios.

## Cuándo elegirlo

Coordinar capacidad de varios componentes.

## Detalles que deciden la respuesta

- Permite configurar escalado de recursos compatibles desde una vista de aplicación; distingue esta herramienta de EC2 Auto Scaling.
- Es útil cuando la demanda afecta varios componentes y se quieren objetivos de capacidad coordinados.

## Caso basado en escenario

**Situación:** Una carga necesita políticas de escalado en más de un tipo de recurso.

**Elección:** AWS Auto Scaling. La pista decisiva es coordinar capacidad de varios componentes.

## Diferencia importante

Para un único grupo de instancias EC2, estudia directamente Amazon EC2 Auto Scaling.

## Fuente oficial

- [Documentación de AWS](https://docs.aws.amazon.com/autoscaling/)
