# Amazon FSx

[← Índice de servicios](../../guia-estudio-saa-sdd.md) · Revisión: 2026-10-23

## Qué hace

Sistemas de archivos administrados de tipos específicos.

## Cuándo elegirlo

Windows, Lustre, NetApp ONTAP u OpenZFS según requisito.

## Detalles que deciden la respuesta

- Selecciona la variante por protocolo y aplicación: Windows File Server, Lustre, NetApp ONTAP u OpenZFS.
- Lustre destaca en procesamiento HPC; Windows File Server integra SMB y Active Directory.

## Caso basado en escenario

**Situación:** Una aplicación Windows necesita recursos SMB y Active Directory.

**Elección:** FSx for Windows File Server. La pista decisiva es windows, lustre, netapp ontap u openzfs según requisito.

## Diferencia importante

No elegir FSx genérico sin especificar variante; EFS cubre NFS Linux general.

## Fuente oficial

- [Documentación de AWS](https://docs.aws.amazon.com/fsx/latest/WindowsGuide/what-is.html)
