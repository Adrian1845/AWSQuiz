# Dónde estás fallando: exámenes 1–7

**Datos disponibles (03-11-2026):** 65 preguntas importadas de cada examen, del 1 al 7. Hay respuestas puntuadas para los exámenes **1–6**. El primer intento del examen 2 contiene **50 de las 65 respuestas**; las otras 15 no se cuentan como fallos de ese intento. El examen 7 no tiene resultados. La tabla muestra solo los primeros intentos; los reintentos de los exámenes 2 y 4 se analizan aparte.

| Examen | Aciertos | Fallos según la fuente |
|---|---:|---:|
| 1 | 51/65 (78,5 %) | 14 |
| 2 (parcial) | 28/50 (56,0 %) | 22 |
| 3 | 48/65 (73,8 %) | 17 |
| **4 (primer intento)** | **37/65 (56,9 %)** | **28** |
| 5 | 45/65 (69,2 %) | 20 |
| 6 | 46/65 (70,8 %) | 19 |
| **Total de primeros intentos** | **255/375 (68,0 %)** | **120** |

**Examen 4, segundo intento:** **42/65 (64,6 %)**, cinco aciertos más que antes. Corregiste 16 fallos, aparecieron 11 fallos nuevos y mantuviste 12. La mejora más clara está en selección múltiple: **3/12 → 7/12**. Consulta el [análisis del reintento](exam4-reintento.md), que separa conceptos útiles de claves discutibles. Este segundo intento no se suma al total anterior porque repite las mismas 65 preguntas.

**Examen 2, segundo intento:** **45/65 (69,2 %)**. En las 50 preguntas comunes pasaste de **28 a 36 aciertos**: corregiste 13, cambiaste a incorrectas 5 y mantuviste 9 mal. De las 15 antes sin responder, acertaste 9. La mayor concentración actual de fallos está en rendimiento (**11/24**). El [análisis del reintento](exam2-reintento.md) detalla las 20 preguntas falladas y señala claves discutibles. Tampoco se suma a la tabla de primeros intentos.

El primer intento del examen 4 fue el de menor puntuación **entre los completos**: 11 errores de rendimiento, 8 de seguridad, 5 de resiliencia y 4 de coste. El primer intento parcial del examen 2 quedó en 56,0 %; no se compara como un examen completo. Hay **312 enunciados distintos** entre los 375 primeros intentos; 63 se repiten, así que el total no representa 375 problemas independientes.

En el **primer intento parcial** del examen 2, los 22 fallos se distribuyen entre rendimiento (7/18), resiliencia (7/13), seguridad (5/12) y coste (3/7). Sobresalen los escenarios con [EC2 y Auto Scaling](../../src/content/questions/compute/saa-source-184886805.md), [acceso a EFS](../../src/content/questions/security/saa-source-184886709.md) y [redes híbridas](../../src/content/questions/security/saa-source-184886755.md). En sus preguntas etiquetadas con VPC fallaste 4/5, aunque esa muestra es pequeña. Consulta el [segundo intento](exam2-reintento.md) para ver las prioridades actuales.

## Prioridades de estudio según los primeros intentos

1. **Selección múltiple:** 31 errores en 73 intentos (**42,5 %**), frente a 89/302 (**29,5 %**) en respuesta única. Antes de enviar, contrasta *cada* opción con todos los requisitos del enunciado. Practica con [seguridad de CloudFront y S3](../../src/content/questions/security/saa-source-147942785.md), [NAT instance frente a NAT gateway](../../src/content/questions/architecture/saa-source-147942795.md) y [SQS FIFO](../../src/content/questions/architecture/saa-source-147942887.md).
2. **Redes y conectividad híbrida:** 19/39 fallos en preguntas etiquetadas con VPC y 7/13 con Direct Connect. Entre los escenarios difíciles están [subred pública/privada](../../src/content/questions/architecture/saa-source-147942783.md), [resolución DNS híbrida](../../src/content/questions/security/saa-source-147942811.md) y [Global Accelerator con UDP](../../src/content/questions/networking/saa-source-147942831.md). Repasa [VPC](../fichas/redes/amazon-vpc.md), [Direct Connect](../fichas/redes/aws-direct-connect.md), [Route 53](../fichas/redes/amazon-route-53.md) y [Global Accelerator](../fichas/redes/aws-global-accelerator.md).
3. **Almacenamiento compartido y migraciones:** EFS aparece en 10 fallos de 18 intentos; FSx, en 6/11. Compara NFS/SMB, acceso desde contenedores, rutas de migración y requisitos de rendimiento: [ECS con EFS](../../src/content/questions/storage/saa-source-147942799.md), [FSx para Windows](../../src/content/questions/storage/saa-source-147942871.md), [DataSync](../../src/content/questions/storage/saa-source-147942873.md) y [EFS con Fargate](../../src/content/questions/storage/saa-source-156638765.md). Fichas: [EFS](../fichas/almacenamiento/amazon-efs.md), [FSx](../fichas/almacenamiento/amazon-fsx.md), [DataSync](../fichas/migracion/aws-datasync.md).
4. **Seguridad aplicada:** la sección de seguridad suma 37 fallos de 114 intentos; la de rendimiento, 38/118; resiliencia suma 29/85. Las tasas son próximas, por lo que conviene estudiar decisiones concretas: [S3 Access Points](../../src/content/questions/security/saa-source-184500649.md), [ACM y certificados importados](../../src/content/questions/security/saa-source-184500643.md), [políticas IAM](../../src/content/questions/security/saa-source-184500683.md) y [S3 Object Lock](../../src/content/questions/security/saa-source-156638759.md). Fichas: [S3](../fichas/almacenamiento/amazon-s3.md), [IAM](../fichas/seguridad/aws-iam.md), [ACM](../fichas/seguridad/aws-certificate-manager-acm.md).

Las etiquetas de servicio se extraen automáticamente de los enunciados y respuestas correctas. Una pregunta puede contar en varios servicios; por eso sus cifras **no se suman**. EC2 acumula 47 fallos de 140 intentos, pero aparece en muchos escenarios distintos: el recuento por sí solo no identifica una laguna específica de EC2.

## Fallos que se repitieron

Diez enunciados se respondieron mal dos veces. Ocho son buenos candidatos para repasar primero: [control de acceso en S3](../../src/content/questions/security/saa-source-119197207.md), [opciones de Lambda](../../src/content/questions/compute/saa-source-119197227.md), [certificados ACM](../../src/content/questions/security/saa-source-119197275.md), [copia de datos entre buckets](../../src/content/questions/storage/saa-source-119197299.md), [arranque de Elastic Beanstalk](../../src/content/questions/compute/saa-source-119197321.md), [IAM Identity Center](../../src/content/questions/security/saa-source-184886771.md), [control de acceso a EFS](../../src/content/questions/security/saa-source-184886709.md) y [FSx for Lustre](../../src/content/questions/storage/saa-source-184886727.md).

Los otros dos enunciados repetidos, sobre [DMS con S3](../../src/content/questions/data-and-analytics/saa-source-119197221.md) y [DataSync con EFS](../../src/content/questions/storage/saa-source-119197231.md), tienen una clave o redacción discutible. Tampoco tomaría como prueba firme el fallo del examen 4 sobre [migración a SQS FIFO](../../src/content/questions/architecture/saa-source-147942887.md): su límite de 3.000 mensajes/s solo corresponde al modo sin alto rendimiento. Consulta el [análisis detallado del examen 1](exam1-analisis.md), que documenta otra pregunta cuestionable sobre Direct Connect. Las 120 respuestas incorrectas son la **puntuación del proveedor**; no se han auditado todas las claves.

Para actualizar las cifras de primeros intentos cuando lleguen más resultados, ejecuta `node scripts/analyze-exam-results.mjs`. El script une `assessment.id` con el ID estable `saa-source-<id>` de cada pregunta importada, comprueba la pertenencia al examen y detecta IDs duplicados. Admite resultados parciales; no incorpora automáticamente archivos de reintento como `exam4results2.json`.
