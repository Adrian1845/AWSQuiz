# Amazon S3 Intelligent-Tiering

[← Índice de servicios](../../guia-estudio-saa-sdd.md) · Revisión: 2026-10-23

## Qué hace

Ajusta niveles de almacenamiento de objetos con patrones de acceso cambiantes.

## Cuándo elegirlo

Acceso impredecible.

## Detalles que deciden la respuesta

- Mueve objetos automáticamente entre niveles según acceso observado, dentro de sus reglas.
- Útil cuando no se puede predecir qué objetos serán calientes o fríos; considera cargos de supervisión y tamaño.

## Caso basado en escenario

**Situación:** No se sabe qué documentos se consultarán el próximo mes.

**Elección:** Intelligent-Tiering. La pista decisiva es acceso impredecible.

## Diferencia importante

S3 Standard-IA conviene cuando el patrón infrecuente es conocido; Intelligent-Tiering evita clasificar objetos a mano.

## Fuente oficial

- [Documentación de AWS](https://docs.aws.amazon.com/AmazonS3/latest/userguide/intelligent-tiering-overview.html)
