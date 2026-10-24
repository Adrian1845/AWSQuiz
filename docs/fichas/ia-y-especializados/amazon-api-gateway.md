# Amazon API Gateway

[← Índice de servicios](../../guia-estudio-saa-sdd.md) · Revisión: 2026-10-23

## Qué hace

Publica y administra APIs.

## Cuándo elegirlo

Exponer HTTP/WebSocket delante de servicios.

## Detalles que deciden la respuesta

- Publica APIs HTTP, REST o WebSocket con rutas, etapas y controles compatibles.
- Permite autorización, límites y observabilidad delante de Lambda u otros backends.

## Caso basado en escenario

**Situación:** Clientes móviles llaman a varias Lambda con autorización y límites.

**Elección:** API Gateway. La pista decisiva es exponer http/websocket delante de servicios.

## Diferencia importante

ALB balancea tráfico web a destinos; API Gateway añade funciones de gestión de API.

## Fuente oficial

- [Documentación de AWS](https://docs.aws.amazon.com/apigateway/latest/developerguide/welcome.html)
