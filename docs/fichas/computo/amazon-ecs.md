# Amazon ECS

[← Índice de servicios](../../guia-estudio-saa-sdd.md) · Revisión: 2026-10-23

## Qué hace

Orquesta contenedores con el modelo de tareas y servicios de AWS.

## Cuándo elegirlo

Aplicaciones contenedorizadas sin exigir Kubernetes.

## Detalles que deciden la respuesta

- Task definition describe contenedores; service mantiene tareas activas; cluster agrupa capacidad.
- Puede ejecutar tareas en EC2 o Fargate y distribuirlas entre AZ con balanceador.

## Caso basado en escenario

**Situación:** Una API Docker debe mantenerse en varias AZ con tareas reemplazables.

**Elección:** ECS. La pista decisiva es aplicaciones contenedorizadas sin exigir kubernetes.

## Diferencia importante

Elige EKS cuando Kubernetes sea un requisito explícito; ECS usa su propio modelo de orquestación.

## Fuente oficial

- [Documentación de AWS](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/Welcome.html)
