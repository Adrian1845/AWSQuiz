# AWS Certificate Manager (ACM)

[← Índice de servicios](../../guia-estudio-saa-sdd.md) · Revisión: 2026-10-23

## Qué hace

Aprovisiona y gestiona certificados TLS para servicios integrados.

## Cuándo elegirlo

HTTPS en ALB o CloudFront.

## Detalles que deciden la respuesta

- Emite o importa certificados y facilita su uso en servicios integrados.
- La validación del dominio y la renovación dependen del tipo de certificado y despliegue.

## Caso basado en escenario

**Situación:** Un ALB público necesita certificado HTTPS administrado.

**Elección:** ACM. La pista decisiva es https en alb o cloudfront.

## Diferencia importante

ACM resuelve TLS; WAF resuelve filtrado de peticiones web.

## Fuente oficial

- [Documentación de AWS](https://docs.aws.amazon.com/acm/latest/userguide/acm-overview.html)
