# Amazon RDS

[← Índice de servicios](../../guia-estudio-saa-sdd.md) · Revisión: 2026-10-23

## Qué hace

Bases relacionales administradas para motores compatibles.

## Cuándo elegirlo

SQL, transacciones y joins.

## Detalles que deciden la respuesta

- Multi-AZ DB instance mantiene standby para failover; sus standby no atienden lecturas. Multi-AZ DB cluster sí puede tener lectores.
- Las read replicas descargan consultas con replicación asíncrona; backups y snapshots cubren recuperación.

## Opciones y límites

| Necesidad | Función de RDS | Detalle decisivo |
|---|---|---|
| Alta disponibilidad en otra AZ | Multi-AZ DB **instance** | Standby sin lecturas, failover administrado. |
| Alta disponibilidad y lectores de clúster | Multi-AZ DB **cluster** | Los lectores sí sirven consultas. |
| Más capacidad de lectura | Read replica | Replicación asíncrona; la aplicación dirige lecturas a ella. |
| Recuperación de datos | Backups automáticos / snapshots | No sustituyen alta disponibilidad de la carga. |
| Muchas conexiones breves | [RDS Proxy](../complementos/amazon-rds-proxy.md) | Pool de conexiones, especialmente útil con Lambda. |

El examen suele distinguir **disponibilidad** de **escalado de lectura**. La frase «Multi-AZ no sirve lecturas» solo describe el despliegue Multi-AZ de instancia; AWS también ofrece clúster Multi-AZ con lectores. Una réplica de lectura puede ir retrasada y no equivale automáticamente a failover administrado. [Multi-AZ](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/Concepts.MultiAZ.html) · [read replicas](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_ReadRepl.html).

## Caso basado en escenario

**Situación:** Una app de pedidos necesita PostgreSQL administrado.

**Elección:** RDS. La pista decisiva es sql, transacciones y joins.

## Diferencia importante

Multi-AZ resuelve alta disponibilidad; read replica resuelve escalado de lectura, con matices según tipo de despliegue.

## Fuente oficial

- [Documentación de AWS](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/Welcome.html)
