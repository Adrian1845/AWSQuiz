# AWS Transit Gateway

[← Índice de servicios](../../guia-estudio-saa-sdd.md) · Revisión: 2026-10-23

## Qué hace

Concentrador de conectividad entre muchas VPC y redes locales.

## Cuándo elegirlo

Evitar mallas de conexiones.

## Detalles que deciden la respuesta

- Conecta VPC y redes híbridas a un concentrador con tablas de rutas propias.
- Simplifica topologías de muchas VPC frente a una malla de peering.

## Caso basado en escenario

**Situación:** Veinte VPC deben comunicarse con el centro de datos.

**Elección:** Transit Gateway. La pista decisiva es evitar mallas de conexiones.

## Diferencia importante

Para dos VPC con necesidad simple, peering puede bastar; Transit Gateway brilla al crecer el número de conexiones.

## Fuente oficial

- [Documentación de AWS](https://docs.aws.amazon.com/vpc/latest/tgw/what-is-transit-gateway.html)
