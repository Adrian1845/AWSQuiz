# AWS Snow Family

[← Índice de servicios](../../guia-estudio-saa-sdd.md) · Revisión: 2026-10-23

## Qué hace

Dispositivos físicos para mover o procesar datos en ubicaciones con red limitada.

## Cuándo elegirlo

Migración masiva fuera de línea.

## Detalles que deciden la respuesta

- Dispositivos físicos trasladan datos o permiten cómputo en ubicaciones con mala conectividad.
- Considera tiempo de envío físico, capacidad y seguridad del proceso de importación.

## Caso basado en escenario

**Situación:** Hay petabytes y la WAN tardaría meses.

**Elección:** Snow Family. La pista decisiva es migración masiva fuera de línea.

## Diferencia importante

DataSync usa red; Snow ayuda cuando la red es el cuello de botella.

## Fuente oficial

- [Documentación de AWS](https://docs.aws.amazon.com/snowball/latest/developer-guide/whatissnowball.html)
