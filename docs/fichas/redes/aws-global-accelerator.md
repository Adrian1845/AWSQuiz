# AWS Global Accelerator

[← Índice de servicios](../../guia-estudio-saa-sdd.md) · Revisión: 2026-10-23

## Qué hace

Entrada global con IP estáticas y red AWS hacia endpoints regionales.

## Cuándo elegirlo

Aplicaciones sensibles a latencia o failover.

## Detalles que deciden la respuesta

- Proporciona direcciones IP estáticas anycast y dirige tráfico por la red global AWS hacia endpoints sanos.
- Sirve a protocolos y aplicaciones donde interesa failover global sin depender solo de DNS.

## Caso basado en escenario

**Situación:** Clientes necesitan IP fijas y rutas globales a varios ALB.

**Elección:** Global Accelerator. La pista decisiva es aplicaciones sensibles a latencia o failover.

## Diferencia importante

CloudFront es CDN con caché; Global Accelerator no sustituye una caché de contenido.

## Fuente oficial

- [Documentación de AWS](https://docs.aws.amazon.com/global-accelerator/latest/dg/what-is-global-accelerator.html)
