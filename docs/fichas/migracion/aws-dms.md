# AWS DMS

[← Índice de servicios](../../guia-estudio-saa-sdd.md) · Revisión: 2026-10-23

## Qué hace

Migra o replica datos entre bases de datos.

## Cuándo elegirlo

Mover datos con interrupción reducida.

## Detalles que deciden la respuesta

- Realiza carga inicial y captura cambios continuos para bases compatibles.
- Reduce ventana de corte al mantener destino sincronizado antes del cambio definitivo.

## Caso basado en escenario

**Situación:** Una base local debe pasar a RDS mientras sigue recibiendo cambios.

**Elección:** DMS. La pista decisiva es mover datos con interrupción reducida.

## Diferencia importante

AWS SCT ayuda a convertir esquemas heterogéneos; DMS mueve los datos.

## Fuente oficial

- [Documentación de AWS](https://docs.aws.amazon.com/dms/latest/userguide/Welcome.html)
