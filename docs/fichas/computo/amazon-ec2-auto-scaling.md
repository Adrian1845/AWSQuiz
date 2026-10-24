# Amazon EC2 Auto Scaling

[← Índice de servicios](../../guia-estudio-saa-sdd.md) · Revisión: 2026-10-23

## Qué hace

Mantiene y ajusta una flota EC2 según demanda o salud.

## Cuándo elegirlo

Una capa web reemplazable.

## Detalles que deciden la respuesta

- Define capacidad mínima, deseada y máxima y usa plantillas de lanzamiento para crear instancias reemplazables.
- Las políticas target tracking ajustan capacidad a una métrica; las health checks reemplazan instancias fallidas y se pueden combinar con un balanceador.

## Caso basado en escenario

**Situación:** El tráfico nocturno cae y el diurno se triplica.

**Elección:** Auto Scaling detrás de un balanceador. La pista decisiva es una capa web reemplazable.

## Diferencia importante

Auto Scaling mantiene capacidad EC2; ELB distribuye tráfico y no crea por sí mismo la flota.

## Fuente oficial

- [Documentación de AWS](https://docs.aws.amazon.com/autoscaling/ec2/userguide/what-is-amazon-ec2-auto-scaling.html)
