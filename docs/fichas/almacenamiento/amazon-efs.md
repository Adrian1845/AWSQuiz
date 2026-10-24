# Amazon EFS

[← Índice de servicios](../../guia-estudio-saa-sdd.md) · Revisión: 2026-10-23

## Qué hace

Sistema de archivos compartido NFS para Linux.

## Cuándo elegirlo

Acceso concurrente desde varias instancias.

## Detalles que deciden la respuesta

- Expone NFS para múltiples clientes Linux y ofrece clases de almacenamiento y modos de rendimiento.
- Usa mount targets y reglas de red para acceso desde las AZ correspondientes.

## Opciones y límites

### Alcance y clases

EFS presenta un sistema de archivos **NFS** a clientes Linux. Varios clientes pueden montarlo a la vez. La opción **Regional** guarda los datos entre varias AZ; **One Zone** los mantiene en una sola AZ y tiene otro perfil de coste y resiliencia. Los *mount targets* y grupos de seguridad permiten acceso desde las redes previstas. Las clases Standard, Infrequent Access y Archive responden a distintas frecuencias de acceso; una política de ciclo de vida puede mover archivos cuando se enfrían. [Guía EFS](https://docs.aws.amazon.com/efs/latest/ug/whatisefs.html).

| Requisito | Elección inicial |
|---|---|
| Directorio NFS compartido por EC2 Linux en varias AZ | EFS Regional. |
| Disco de bloques de una EC2 | [EBS](amazon-ebs.md). |
| Compartido SMB con integración Windows/AD | [FSx for Windows File Server](amazon-fsx.md). |
| Objetos accesibles por API | [S3](amazon-s3.md). |

## Caso basado en escenario

**Situación:** Varias EC2 Linux necesitan el mismo árbol de archivos.

**Elección:** EFS. La pista decisiva es acceso concurrente desde varias instancias.

## Diferencia importante

EFS comparte archivos; EBS entrega bloques a instancias de su AZ; FSx responde a protocolos o motores de archivo específicos.

## Fuente oficial

- [Documentación de AWS](https://docs.aws.amazon.com/efs/latest/ug/whatisefs.html)
