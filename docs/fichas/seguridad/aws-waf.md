# AWS WAF

[← Índice de servicios](../../guia-estudio-saa-sdd.md) · Revisión: 2026-10-23

## Qué hace

Filtra solicitudes HTTP(S) mediante reglas de capa 7.

## Cuándo elegirlo

Proteger webs y APIs.

## Detalles que deciden la respuesta

- Web ACL, reglas y grupos de reglas inspeccionan solicitudes HTTP(S) en recursos compatibles.
- Puede filtrar patrones de ataque, IP y tasas de peticiones; requiere ajustar falsos positivos.

## Caso basado en escenario

**Situación:** Una web recibe patrones de SQL injection.

**Elección:** WAF ante CloudFront o ALB. La pista decisiva es proteger webs y apis.

## Diferencia importante

Shield trata DDoS y Network Firewall inspecciona tráfico de red; WAF actúa en la capa web.

## Fuente oficial

- [Documentación de AWS](https://docs.aws.amazon.com/waf/latest/developerguide/what-is-aws-waf.html)
