# Amazon VPC

[← Índice de servicios](../../guia-estudio-saa-sdd.md) · Revisión: 2026-10-23

## Qué hace

Red virtual aislada: subredes, rutas y controles de tráfico.

## Cuándo elegirlo

Alojar recursos privados.

## Detalles que deciden la respuesta

- Subredes pertenecen a una AZ; la tabla de rutas decide siguiente salto y los grupos de seguridad filtran por recurso.
- Security groups son stateful; NACL son stateless a nivel de subred. Una subred pública tiene ruta al internet gateway.

## Opciones y límites

| Elemento | Función | Pista de examen |
|---|---|---|
| **Subred** | Segmento de una VPC en una AZ. | Una capa de base de datos va en subred privada. |
| **Tabla de rutas** | Decide el siguiente salto. | Ruta `0.0.0.0/0` al internet gateway hace pública la subred si otros requisitos se cumplen. |
| **Security group** | Filtro *stateful* asociado a interfaces de red; permite reglas de entrada/salida. | Autorizar app→DB por grupo de seguridad. |
| **Network ACL** | Filtro *stateless* de subred, con reglas allow/deny. | Bloquear un rango IP en el límite de subred. |
| **NAT Gateway** | Salida de recursos privados a internet según rutas. | Descargar actualizaciones sin recibir conexiones entrantes. |
| **VPC endpoint** | Acceso privado a un servicio compatible. | S3 desde una subred privada sin NAT. |

Una instancia en subred pública necesita también IP pública o Elastic IP y reglas compatibles para acceso directo desde internet. Las subredes privadas no son «aisladas» automáticamente si tienen rutas a NAT o enlaces privados; la tabla de rutas y controles determinan el flujo. [Redes VPC](https://docs.aws.amazon.com/vpc/latest/userguide/what-is-amazon-vpc.html).

## Caso basado en escenario

**Situación:** La base de datos no debe tener ruta de entrada desde internet.

**Elección:** VPC con subred privada. La pista decisiva es alojar recursos privados.

## Diferencia importante

VPC define la red; PrivateLink, VPN y Transit Gateway resuelven conexiones concretas.

## Fuente oficial

- [Documentación de AWS](https://docs.aws.amazon.com/vpc/latest/userguide/what-is-amazon-vpc.html)
