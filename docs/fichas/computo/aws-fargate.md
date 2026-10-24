# AWS Fargate

[← Índice de servicios](../../guia-estudio-saa-sdd.md) · Revisión: 2026-10-23

## Qué hace

Capacidad administrada para tareas de ECS o pods de EKS.

## Cuándo elegirlo

Contenedores sin gestionar hosts.

## Detalles que deciden la respuesta

- Es una opción de capacidad para ECS y EKS, no un orquestador alternativo.
- Se paga por recursos de tarea o pod; define CPU, memoria, red y permisos por carga.

## Caso basado en escenario

**Situación:** Un servicio en contenedor necesita ejecución continua sin flota EC2 propia.

**Elección:** Fargate. La pista decisiva es contenedores sin gestionar hosts.

## Diferencia importante

ECS/EKS gestionan la programación; Fargate evita administrar la flota EC2 que ejecuta contenedores.

## Fuente oficial

- [Documentación de AWS](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/AWS_Fargate.html)
