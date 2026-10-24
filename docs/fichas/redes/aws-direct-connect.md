# AWS Direct Connect

[← Índice de servicios](../../guia-estudio-saa-sdd.md) · Revisión: 2026-10-23

## Qué hace

Enlace de red dedicado entre instalaciones y AWS.

## Cuándo elegirlo

Conectividad privada y capacidad predecible.

## Detalles que deciden la respuesta

- Circuito dedicado hasta una ubicación de Direct Connect, con interfaces virtuales para destinos AWS.
- Considera redundancia física y VPN de respaldo para disponibilidad de extremo a extremo.

## Caso basado en escenario

**Situación:** Un centro de datos transfiere grandes volúmenes de forma sostenida.

**Elección:** Direct Connect. La pista decisiva es conectividad privada y capacidad predecible.

## Diferencia importante

No es cifrado por defecto solo por ser dedicado; VPN sobre Direct Connect puede cubrir requisitos de cifrado.

## Fuente oficial

- [Documentación de AWS](https://docs.aws.amazon.com/directconnect/latest/UserGuide/Welcome.html)
