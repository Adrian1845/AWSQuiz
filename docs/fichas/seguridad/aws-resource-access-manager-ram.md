# AWS Resource Access Manager (RAM)

[← Índice de servicios](../../guia-estudio-saa-sdd.md) · Revisión: 2026-10-23

## Qué hace

Comparte recursos compatibles entre cuentas.

## Cuándo elegirlo

Uso común sin duplicarlos.

## Detalles que deciden la respuesta

- Comparte recursos compatibles, como subredes o Transit Gateway, con cuentas autorizadas.
- El recurso sigue bajo control de la cuenta propietaria; los consumidores reciben acceso según tipo de recurso.

## Caso basado en escenario

**Situación:** Varias cuentas deben usar una misma subred compartida.

**Elección:** RAM. La pista decisiva es uso común sin duplicarlos.

## Diferencia importante

No equivale a copiar el recurso ni a abrir conectividad general entre VPC.

## Fuente oficial

- [Documentación de AWS](https://docs.aws.amazon.com/ram/latest/userguide/what-is.html)
