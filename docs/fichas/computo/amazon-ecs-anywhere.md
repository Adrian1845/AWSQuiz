# Amazon ECS Anywhere

[← Índice de servicios](../../guia-estudio-saa-sdd.md) · Revisión: 2026-10-23

## Qué hace

Gestiona tareas ECS en infraestructura propia.

## Cuándo elegirlo

Conservar hosts locales bajo control ECS.

## Detalles que deciden la respuesta

- Registra capacidad externa para ejecutar tareas ECS en servidores propios.
- La conectividad y operación del host local siguen siendo responsabilidad del equipo.

## Caso basado en escenario

**Situación:** Un almacén mantiene servidores locales pero quiere programar allí tareas ECS.

**Elección:** ECS Anywhere. La pista decisiva es conservar hosts locales bajo control ecs.

## Diferencia importante

Outposts traslada hardware AWS al sitio; ECS Anywhere usa servidores existentes gestionados por el cliente.

## Fuente oficial

- [Documentación de AWS](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/ecs-anywhere.html)
