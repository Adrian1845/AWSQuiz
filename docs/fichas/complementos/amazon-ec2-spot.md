# Amazon EC2 Spot

[← Índice de servicios](../../guia-estudio-saa-sdd.md) · Revisión: 2026-10-23

## Qué hace

Capacidad EC2 sobrante que puede interrumpirse.

## Cuándo elegirlo

Trabajos tolerantes a interrupción.

## Detalles que deciden la respuesta

- Usa capacidad sobrante con posibilidad de interrupción.
- Diseña checkpointing, reintentos, diversificación de pools y estado fuera de la instancia.

## Caso basado en escenario

**Situación:** Renderizado por lotes con checkpoints y plazo flexible.

**Elección:** Spot. La pista decisiva es trabajos tolerantes a interrupción.

## Diferencia importante

On-Demand se elige para trabajo que no tolera interrupción; Spot para trabajos flexibles.

## Fuente oficial

- [Documentación de AWS](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/using-spot-instances.html)
