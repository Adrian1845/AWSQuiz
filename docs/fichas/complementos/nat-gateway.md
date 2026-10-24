# NAT Gateway

[← Índice de servicios](../../guia-estudio-saa-sdd.md) · Revisión: 2026-10-23

## Qué hace

Permite salida de subredes privadas hacia internet según la ruta.

## Cuándo elegirlo

Actualizaciones sin entrada pública.

## Detalles que deciden la respuesta

- Permite salida desde subred privada hacia destinos públicos mediante rutas.
- Despliega por AZ para evitar dependencias entre AZ y revisa coste de procesamiento de datos.

## Caso basado en escenario

**Situación:** EC2 privadas deben descargar parches sin IP pública.

**Elección:** NAT Gateway. La pista decisiva es actualizaciones sin entrada pública.

## Diferencia importante

Un VPC endpoint es preferible para acceso privado a un servicio AWS compatible como S3.

## Fuente oficial

- [Documentación de AWS](https://docs.aws.amazon.com/vpc/latest/userguide/vpc-nat-gateway.html)
