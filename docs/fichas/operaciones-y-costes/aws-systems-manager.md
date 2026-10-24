# AWS Systems Manager

[← Índice de servicios](../../guia-estudio-saa-sdd.md) · Revisión: 2026-10-23

## Qué hace

Operación y automatización de nodos y recursos.

## Cuándo elegirlo

Mantenimiento y acceso controlado.

## Detalles que deciden la respuesta

- Session Manager ofrece acceso sin SSH público; Run Command y Automation ejecutan tareas operativas.
- Requiere permisos y agentes/configuración compatibles para administrar nodos.

## Caso basado en escenario

**Situación:** Administradores necesitan entrar a EC2 sin abrir SSH público.

**Elección:** Session Manager. La pista decisiva es mantenimiento y acceso controlado.

## Diferencia importante

CloudFormation aprovisiona recursos; Systems Manager opera y mantiene los existentes.

## Fuente oficial

- [Documentación de AWS](https://docs.aws.amazon.com/systems-manager/latest/userguide/what-is-systems-manager.html)
