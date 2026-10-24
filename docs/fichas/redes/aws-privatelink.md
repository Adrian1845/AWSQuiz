# AWS PrivateLink

[← Índice de servicios](../../guia-estudio-saa-sdd.md) · Revisión: 2026-10-23

## Qué hace

Acceso privado a servicios mediante endpoints en VPC.

## Cuándo elegirlo

Consumir un servicio sin exponerlo públicamente.

## Detalles que deciden la respuesta

- Un interface endpoint crea interfaces de red privadas para llegar a un servicio compatible.
- Evita exponer el servicio o establecer conectividad de red amplia entre productor y consumidor.

## Caso basado en escenario

**Situación:** Dos empresas conectan un servicio privado sin abrir rutas amplias entre VPC.

**Elección:** PrivateLink. La pista decisiva es consumir un servicio sin exponerlo públicamente.

## Diferencia importante

VPC peering o Transit Gateway conectan redes; PrivateLink expone un servicio concreto.

## Fuente oficial

- [Documentación de AWS](https://docs.aws.amazon.com/vpc/latest/privatelink/what-is-privatelink.html)
