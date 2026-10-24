# AWS Network Firewall

[← Índice de servicios](../../guia-estudio-saa-sdd.md) · Revisión: 2026-10-23

## Qué hace

Filtrado de tráfico de red en una VPC.

## Cuándo elegirlo

Inspección central de flujos de red.

## Detalles que deciden la respuesta

- Aplica políticas y reglas stateful/stateless a flujos que atraviesan sus endpoints.
- La arquitectura de rutas es crucial: el tráfico debe atravesar el firewall para inspeccionarse.

## Caso basado en escenario

**Situación:** Salidas de varias subredes deben seguir reglas de dominio y protocolo.

**Elección:** Network Firewall. La pista decisiva es inspección central de flujos de red.

## Diferencia importante

Security groups filtran recursos concretos; Network Firewall permite inspección central de red.

## Fuente oficial

- [Documentación de AWS](https://docs.aws.amazon.com/network-firewall/latest/developerguide/what-is-aws-network-firewall.html)
