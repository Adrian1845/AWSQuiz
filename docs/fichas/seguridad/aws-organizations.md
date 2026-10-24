# AWS Organizations

[← Índice de servicios](../../guia-estudio-saa-sdd.md) · Revisión: 2026-10-23

## Qué hace

Estructura de cuentas, facturación y políticas de control.

## Cuándo elegirlo

Gobernar múltiples cuentas.

## Detalles que deciden la respuesta

- Organiza cuentas en unidades y aplica SCP como límite máximo de permisos.
- Una SCP no concede permiso por sí sola; los permisos efectivos aún requieren IAM.

## Caso basado en escenario

**Situación:** Finanzas y producción requieren cuentas separadas y restricciones centrales.

**Elección:** Organizations. La pista decisiva es gobernar múltiples cuentas.

## Diferencia importante

Control Tower construye una landing zone gobernada sobre la organización.

## Fuente oficial

- [Documentación de AWS](https://docs.aws.amazon.com/organizations/latest/userguide/orgs_introduction.html)
