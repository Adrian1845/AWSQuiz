# Amazon EC2 Capacity Reservations

[← Índice de servicios](../../guia-estudio-saa-sdd.md) · Revisión: 2026-10-23

## Qué hace

Reserva capacidad EC2 en una AZ específica.

## Cuándo elegirlo

Garantizar disponibilidad de capacidad.

## Detalles que deciden la respuesta

- Reserva capacidad para atributos de instancia en una AZ concreta.
- Sirve cuando importa poder lanzar capacidad, independientemente del descuento.

## Caso basado en escenario

**Situación:** Un evento exige arrancar instancias concretas en una AZ.

**Elección:** Capacity Reservation. La pista decisiva es garantizar disponibilidad de capacidad.

## Diferencia importante

Savings Plans o Reserved Instances se estudian por compromiso de gasto; Capacity Reservation garantiza capacidad.

## Fuente oficial

- [Documentación de AWS](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-capacity-reservations.html)
