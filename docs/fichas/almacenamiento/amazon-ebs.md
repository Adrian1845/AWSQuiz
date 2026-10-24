# Amazon EBS

[← Índice de servicios](../../guia-estudio-saa-sdd.md) · Revisión: 2026-10-23

## Qué hace

Volúmenes de bloques para EC2 dentro de una AZ.

## Cuándo elegirlo

Disco persistente de una instancia.

## Detalles que deciden la respuesta

- El volumen y la instancia que lo monta deben estar en la misma AZ; snapshots permiten recrear volúmenes.
- gp3 cubre uso general, io2 IOPS exigentes y st1/sc1 patrones secuenciales; elige por IOPS, rendimiento y coste.

## Opciones y límites

### Tipos de volumen y alcance

| Tipo | Perfil típico | Pista |
|---|---|---|
| **gp3** | SSD de uso general | Disco de sistema o base de datos sin IOPS extremos. |
| **io2** | SSD de IOPS aprovisionadas | Base transaccional sensible a latencia sostenida. |
| **st1** | HDD optimizado para throughput | Lecturas y escrituras secuenciales de grandes bloques. |
| **sc1** | HDD frío | Datos menos activos con acceso secuencial. |

Un volumen EBS está en **una AZ** y se adjunta a una instancia de esa AZ. El dato persiste tras `stop/start`; para recuperarlo en otra AZ se crea un volumen desde un **snapshot**. El volumen raíz puede borrarse al terminar la instancia si `DeleteOnTermination` está activado. La mayoría de volúmenes se adjuntan a una instancia; **Multi-Attach** existe solo bajo condiciones específicas y no convierte EBS en un sistema de archivos compartido. [Volúmenes EBS](https://docs.aws.amazon.com/ebs/latest/userguide/ebs-volumes.html).

**Regla de examen:** EBS = bloques persistentes para EC2; [instance store](../computo/amazon-ec2.md#almacenamiento-ebs-instance-store-efs-y-s3) = bloques locales efímeros; [EFS](amazon-efs.md) = archivos NFS compartidos. Si la pregunta pide varios nodos Linux montando el mismo árbol, EFS es la pista, no un EBS común.

## Caso basado en escenario

**Situación:** Una base de datos autogestionada en EC2 necesita volumen de bloques.

**Elección:** EBS. La pista decisiva es disco persistente de una instancia.

## Diferencia importante

Instance store pierde datos al detener o terminar; EFS es archivo compartido entre clientes.

## Fuente oficial

- [Documentación de AWS](https://docs.aws.amazon.com/ebs/latest/userguide/what-is-ebs.html)
