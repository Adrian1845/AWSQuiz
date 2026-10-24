# Amazon S3

[← Índice de servicios](../../guia-estudio-saa-sdd.md) · Revisión: 2026-10-23

## Qué hace

Almacenamiento de objetos con clases, políticas y eventos.

## Cuándo elegirlo

Ficheros, datos estáticos y lagos de datos.

## Detalles que deciden la respuesta

- La unidad es el objeto dentro de un bucket; políticas, versionado, replicación y ciclo de vida resuelven requisitos distintos.
- Las clases Standard, Intelligent-Tiering, IA y Glacier cambian coste, patrón de acceso y recuperación.

## Opciones y límites

### Clases y funciones que suelen confundirse

| Necesidad | Opción de S3 |
|---|---|
| Acceso frecuente y latencia inmediata | Standard. |
| Acceso cambiante o difícil de predecir | [Intelligent-Tiering](../complementos/amazon-s3-intelligent-tiering.md). |
| Acceso infrecuente conocido, pero inmediato | Standard-IA; One Zone-IA solo si la pérdida de una AZ es aceptable. |
| Archivo raro con acceso inmediato | Glacier Instant Retrieval. |
| Archivo que admite restauración | Glacier Flexible Retrieval o Deep Archive según espera y coste. |

**Versioning** protege versiones frente a sobrescrituras o borrados accidentales; **lifecycle** mueve o expira objetos según reglas; **replication** copia objetos a otro bucket bajo su configuración; **Object Lock** ayuda a imponer retención contra borrado. Una bucket policy o IAM decide acceso, y Block Public Access ayuda a evitar exposición pública. No confundir durabilidad de objetos con recuperación inmediata de una clase archivada. [Clases de S3](https://docs.aws.amazon.com/AmazonS3/latest/userguide/storage-class-intro.html).

## Caso basado en escenario

**Situación:** Millones de imágenes deben guardarse y consultarse por clave.

**Elección:** S3. La pista decisiva es ficheros, datos estáticos y lagos de datos.

## Diferencia importante

No es un volumen de bloques ni un sistema de archivos POSIX compartido; para eso compara EBS y EFS.

## Fuente oficial

- [Documentación de AWS](https://docs.aws.amazon.com/AmazonS3/latest/userguide/Welcome.html)
