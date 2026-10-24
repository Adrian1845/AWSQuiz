# Elastic Load Balancing

[← Índice de servicios](../../guia-estudio-saa-sdd.md) · Revisión: 2026-10-23

## Qué hace

Reparte tráfico entre destinos sanos. ALB atiende reglas HTTP; NLB atiende necesidades TCP/UDP y red.

## Cuándo elegirlo

.

## Detalles que deciden la respuesta

- ALB enruta HTTP(S) por host o ruta; NLB opera a nivel de conexión y sirve TCP/UDP/TLS.
- Los target groups y health checks apartan destinos no sanos; despliega en varias AZ para resiliencia.

## Opciones y límites

### Tipos de balanceador

| Tipo | Capa y pista | Ejemplo |
|---|---|---|
| **ALB** | HTTP/HTTPS, reglas por host, ruta o encabezado. | `/api` va a un target group y `/media` a otro. |
| **NLB** | TCP/UDP/TLS, alto rendimiento y direcciones IP estáticas por AZ. | Clientes usan TCP y necesitan IP fija. |
| **GWLB** | Distribuye tráfico hacia appliances de red mediante GENEVE. | Flota de firewalls de terceros inspecciona tráfico. |
| **CLB** | Generación anterior. | Reconocerlo en arquitecturas heredadas; preferir tipo actual si no hay restricción. |

Un **target group** contiene destinos y health checks. El balanceador envía tráfico a destinos sanos; [EC2 Auto Scaling](../computo/amazon-ec2-auto-scaling.md) ajusta el número de instancias. Route 53 resuelve el nombre DNS, mientras el balanceador atiende las conexiones. [Comparación oficial](https://docs.aws.amazon.com/elasticloadbalancing/).

## Caso basado en escenario

**Situación:** Una web enruta `/api` y `/images` a grupos distintos.

**Elección:** ALB. La pista decisiva es .

## Diferencia importante

Route 53 resuelve nombres; ELB recibe y reparte conexiones reales.

## Fuente oficial

- [Documentación de AWS](https://docs.aws.amazon.com/elasticloadbalancing/latest/userguide/what-is-load-balancing.html)
