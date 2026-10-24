# Amazon Cognito

[← Índice de servicios](../../guia-estudio-saa-sdd.md) · Revisión: 2026-10-23

## Qué hace

Identidades y autenticación de usuarios de aplicaciones.

## Cuándo elegirlo

Registro e inicio de sesión de clientes.

## Detalles que deciden la respuesta

- User pools autentican usuarios finales; identity pools pueden entregar credenciales AWS temporales.
- Se integra con proveedores de identidad y flujos de registro e inicio de sesión.

## Caso basado en escenario

**Situación:** Una app móvil requiere cuentas de usuarios finales.

**Elección:** Cognito. La pista decisiva es registro e inicio de sesión de clientes.

## Diferencia importante

IAM Identity Center se orienta a la fuerza laboral y cuentas AWS; Cognito a usuarios de la aplicación.

## Fuente oficial

- [Documentación de AWS](https://docs.aws.amazon.com/cognito/latest/developerguide/what-is-amazon-cognito.html)
