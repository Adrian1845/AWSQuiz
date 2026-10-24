# AWS Site-to-Site VPN

[← Índice de servicios](../../guia-estudio-saa-sdd.md) · Revisión: 2026-10-23

## Qué hace

Túneles cifrados sobre internet entre red local y AWS.

## Cuándo elegirlo

Conectividad híbrida rápida de establecer.

## Detalles que deciden la respuesta

- Usa túneles IPsec sobre internet hacia gateway virtual o Transit Gateway.
- Da una opción de conectividad híbrida rápida de desplegar y puede respaldar Direct Connect.

## Caso basado en escenario

**Situación:** Una oficina necesita enlazar su red con una VPC esta semana.

**Elección:** Site-to-Site VPN. La pista decisiva es conectividad híbrida rápida de establecer.

## Diferencia importante

Direct Connect ofrece circuito dedicado; VPN usa internet y cifra el tráfico.

## Fuente oficial

- [Documentación de AWS](https://docs.aws.amazon.com/vpn/latest/s2svpn/VPC_VPN.html)
