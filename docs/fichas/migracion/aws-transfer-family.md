# AWS Transfer Family

[← Índice de servicios](../../guia-estudio-saa-sdd.md) · Revisión: 2026-10-23

## Qué hace

Endpoints administrados de protocolos de transferencia de archivos.

## Cuándo elegirlo

SFTP/FTP/FTPS hacia AWS.

## Detalles que deciden la respuesta

- Ofrece endpoints de transferencia por protocolos tradicionales hacia almacenamiento AWS compatible.
- Permite que socios con clientes SFTP/FTP/FTPS sigan enviando archivos sin operar un servidor propio.

## Caso basado en escenario

**Situación:** Socios solo pueden entregar archivos por SFTP a un destino S3.

**Elección:** Transfer Family. La pista decisiva es sftp/ftp/ftps hacia aws.

## Diferencia importante

DataSync se centra en tareas de copia; Transfer Family expone protocolos a clientes externos.

## Fuente oficial

- [Documentación de AWS](https://docs.aws.amazon.com/transfer/latest/userguide/what-is-aws-transfer-family.html)
