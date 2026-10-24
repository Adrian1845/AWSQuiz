# AWS Shield

[← Índice de servicios](../../guia-estudio-saa-sdd.md) · Revisión: 2026-10-23

## Qué hace

Protección administrada frente a DDoS.

## Cuándo elegirlo

La disponibilidad de endpoints públicos.

## Detalles que deciden la respuesta

- Shield Standard aporta protección DDoS básica a recursos AWS compatibles; Advanced añade capacidades y soporte.
- Úsalo cuando la amenaza principal sea agotar disponibilidad mediante tráfico malicioso.

## Caso basado en escenario

**Situación:** Un sitio público necesita defensas DDoS adicionales.

**Elección:** Shield. La pista decisiva es la disponibilidad de endpoints públicos.

## Diferencia importante

WAF permite reglas de aplicación como bloquear patrones HTTP; Shield se centra en DDoS.

## Fuente oficial

- [Documentación de AWS](https://docs.aws.amazon.com/waf/latest/developerguide/shield-chapter.html)
