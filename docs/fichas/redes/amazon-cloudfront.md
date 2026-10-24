# Amazon CloudFront

[← Índice de servicios](../../guia-estudio-saa-sdd.md) · Revisión: 2026-10-23

## Qué hace

CDN que cachea y entrega contenido en ubicaciones de borde.

## Cuándo elegirlo

Reducir latencia de distribución.

## Detalles que deciden la respuesta

- Usa distribuciones, orígenes y comportamientos de caché; puede proteger el origen S3 con OAC.
- Reduce latencia de contenido cacheable y puede integrarse con WAF y TLS.

## Caso basado en escenario

**Situación:** Clientes globales descargan las mismas imágenes desde S3.

**Elección:** CloudFront. La pista decisiva es reducir latencia de distribución.

## Diferencia importante

Global Accelerator mejora la ruta de red hacia aplicaciones; CloudFront cachea contenido en el borde.

## Fuente oficial

- [Documentación de AWS](https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/Introduction.html)
