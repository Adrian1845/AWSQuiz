# VPC endpoints

[← Índice de servicios](../../guia-estudio-saa-sdd.md) · Revisión: 2026-10-23

## Qué hace

Acceso privado desde VPC a servicios compatibles.

## Cuándo elegirlo

Evitar salida pública.

## Detalles que deciden la respuesta

- Gateway endpoints sirven S3/DynamoDB; interface endpoints crean interfaces privadas para servicios compatibles.
- Políticas de endpoint y del recurso siguen controlando acceso, además de las rutas o grupos de seguridad.

## Caso basado en escenario

**Situación:** EC2 privada debe leer S3 sin NAT.

**Elección:** gateway endpoint de S3. La pista decisiva es evitar salida pública.

## Diferencia importante

NAT Gateway lleva tráfico a destinos públicos; endpoint mantiene acceso a servicios compatibles por rutas privadas.

## Fuente oficial

- [Documentación de AWS](https://docs.aws.amazon.com/vpc/latest/privatelink/vpc-endpoints.html)
