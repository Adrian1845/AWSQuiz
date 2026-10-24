# Amazon Aurora

[← Índice de servicios](../../guia-estudio-saa-sdd.md) · Revisión: 2026-10-23

## Qué hace

Motor relacional administrado compatible con MySQL/PostgreSQL.

## Cuándo elegirlo

SQL con requisitos altos de disponibilidad o escalado.

## Detalles que deciden la respuesta

- Comparte almacenamiento de clúster entre instancia escritora y lectoras, con endpoints diferenciados.
- Las réplicas Aurora ayudan a escalar lecturas y al failover; valida compatibilidad MySQL o PostgreSQL.

## Opciones y límites

Una **instancia writer** acepta escrituras; las **reader instances** atienden lecturas y pueden participar en failover. El **cluster endpoint** dirige a la escritora y el **reader endpoint** a lectoras; elegir el endpoint incorrecto puede concentrar consultas en la escritora. El almacenamiento del clúster se administra de forma separada de las instancias de cómputo. [Conexiones Aurora](https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/Aurora.Overview.Endpoints.html).

| Necesidad | Decisión |
|---|---|
| SQL compatible con MySQL/PostgreSQL y alto escalado de lectura | Aurora con reader instances. |
| Cómputo relacional muy variable | [Aurora Serverless](aurora-serverless.md), si cumple compatibilidad y requisitos. |
| Muchas conexiones cortas | [RDS Proxy](../complementos/amazon-rds-proxy.md). |

## Caso basado en escenario

**Situación:** La aplicación conserva SQL y necesita más lecturas mediante réplicas Aurora.

**Elección:** Aurora. La pista decisiva es sql con requisitos altos de disponibilidad o escalado.

## Diferencia importante

RDS ofrece motores relacionales administrados; Aurora es un motor propio compatible con APIs MySQL/PostgreSQL.

## Fuente oficial

- [Documentación de AWS](https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/CHAP_AuroraOverview.html)
