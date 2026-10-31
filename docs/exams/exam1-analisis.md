# Análisis de exam1

**Fecha del análisis:** 2026-10-24  
**Método:** unir `exam1.json.results[].id` con `exam1results.json.results[].assessment.id` y usar `score.parsedValue` (1 = correcta, 0 = incorrecta). Hubo **65 coincidencias de 65**. Las preguntas importadas conservan el ID como `saa-source-<id>` y siguen en estado `draft`.

## Resultado observado

**51 correctas de 65 (78,5 %); 14 incorrectas marcadas por la fuente.** Es una sola prueba: los porcentajes describen este examen, no una estimación estable de rendimiento futuro.

| Dominio del examen | Preguntas | Incorrectas | Tasa de error |
|---|---:|---:|---:|
| Design Secure Architectures | 23 | 7 | 30,4 % |
| Design High-Performing Architectures | 18 | 4 | 22,2 % |
| Design Resilient Architectures | 12 | 2 | 16,7 % |
| Design Cost-Optimized Architectures | 12 | 1 | 8,3 % |

En preguntas de **una respuesta** hubo 10 fallos de 50 (20 %). En **selección múltiple**, 4 de 15 (26,7 %); en los cuatro casos elegiste al menos una opción correcta y la sustituiste o completaste con una incorrecta. Conviene verificar cada requisito por separado antes de cerrar una respuesta múltiple.

## Dónde concentrar el estudio

### 1. Elegir el control de seguridad preciso (6 fallos evaluables)

| Pregunta | Tu elección frente a la respuesta de la fuente | Regla que conviene fijar |
|---|---|---|
| [119197213](../../src/content/questions/security/saa-source-119197213.md) | AD administrado + roles frente a **AD Connector + IAM Identity Center + permission sets**. | Acceso humano a múltiples cuentas: federación y permission sets; compara con roles de cargas. |
| [119197257](../../src/content/questions/security/saa-source-119197257.md) | IAM + NACL frente a **IAM + security group**. | EFS usa el security group del *mount target* para NFS y puede restringir clientes con IAM. |
| [119197207](../../src/content/questions/security/saa-source-119197207.md) | Macie frente a **S3 Access Points con políticas por prefijo**. | Macie descubre datos sensibles; una política de acceso controla quién puede leer o escribir. |
| [119197251](../../src/content/questions/networking/saa-source-119197251.md) | Compartir «la VPC» frente a **compartir subredes** de la VPC. | VPC sharing se implementa compartiendo subredes con otras cuentas de la organización. |
| [119197275](../../src/content/questions/security/saa-source-119197275.md) | Métrica CloudWatch frente a **regla AWS Config** para certificados importados en ACM. | Los certificados importados no se renuevan automáticamente; la regla verifica expiración. |
| [119197245](../../src/content/questions/security/saa-source-119197245.md) | NACL que bloquea SSH frente a **TLS para RDS**. | Si el requisito es cifrar datos en tránsito, bloquear un puerto administrativo no lo cumple. |

Estudia [IAM Identity Center](../fichas/seguridad/aws-iam-identity-center.md), [EFS](../fichas/almacenamiento/amazon-efs.md), [S3](../fichas/almacenamiento/amazon-s3.md) y [VPC](../fichas/redes/amazon-vpc.md). El patrón común es distinguir **identidad**, **red**, **clasificación de datos** y **cifrado** antes de escoger un servicio.

### 2. Operación y coste de cómputo (3 fallos)

| Pregunta | Corrección de estudio |
|---|---|
| [119197217](../../src/content/questions/compute/saa-source-119197217.md) | ECS sobre EC2 se factura por capacidad EC2/EBS usada; Fargate por recursos solicitados para las tareas. |
| [119197227](../../src/content/questions/compute/saa-source-119197227.md) | En Lambda, separa salida desde VPC, alarmas de concurrencia/invocaciones y reutilización mediante Layers. Aumentar el timeout sin motivo no mejora el rendimiento. |
| [119197321](../../src/content/questions/compute/saa-source-119197321.md) | Para acelerar el arranque de Beanstalk, incorpora componentes estáticos a una AMI y deja la configuración dinámica para user data. |

Repasa [EC2](../fichas/computo/amazon-ec2.md), [Fargate](../fichas/computo/aws-fargate.md) y [Lambda](../fichas/computo/aws-lambda.md).

### 3. Almacenamiento y movimiento masivo (2 fallos)

| Pregunta | Corrección de estudio |
|---|---|
| [119197285](../../src/content/questions/storage/saa-source-119197285.md) | La pista es EDA con procesamiento paralelo de datos calientes y repositorio de datos fríos: FSx for Lustre integrado con S3, no Glue. |
| [119197299](../../src/content/questions/storage/saa-source-119197299.md) | Para una copia única entre buckets a escala de 1 PB, la fuente admite `aws s3 sync` o S3 Batch Replication; copiar manualmente desde la consola no es la opción adecuada. |

Repasa [FSx](../fichas/almacenamiento/amazon-fsx.md) y [S3](../fichas/almacenamiento/amazon-s3.md).

## Tres preguntas cuya clave requiere revisión

Estas tres figuran entre las 14 incorrectas del marcador original. **No las contaría como lagunas confirmadas** sin corregir el enunciado o la opción marcada:

| Pregunta | Qué falla en la clave o el enunciado | Evidencia oficial |
|---|---|---|
| [119197249](../../src/content/questions/networking/saa-source-119197249.md) | La opción marcada afirma que un Direct Connect gateway con virtual private gateways permite tránsito entre las VPC asociadas por sí solo. AWS indica que la comunicación directa VPC a VPC no está soportada de forma general; ninguna opción parece cubrir toda la conectividad solicitada. | [Asociaciones VGW de Direct Connect](https://docs.aws.amazon.com/directconnect/latest/UserGuide/virtualgateways.html). |
| [119197231](../../src/content/questions/storage/saa-source-119197231.md) | La solución general **DataSync + Direct Connect + EFS** es razonable, pero la opción llama al endpoint privado «para Amazon EFS». La documentación lo describe como **VPC endpoint de DataSync**; DataSync accede a EFS mediante interfaces de red y *mount targets*. | [Arquitectura de DataSync con Direct Connect](https://docs.aws.amazon.com/datasync/latest/userguide/direct-connect-architecture.html), [ubicación EFS](https://docs.aws.amazon.com/datasync/latest/userguide/create-efs-location.html). |
| [119197221](../../src/content/questions/data-and-analytics/saa-source-119197221.md) | DMS sí admite S3 como origen y Kinesis como destino, pero para cambios desde S3 exige **archivos CDC estructurados en una ruta específica**. El enunciado solo dice archivos de datos/logs y actualizaciones genéricas, por lo que faltan requisitos para justificar DMS como respuesta inequívoca. | [Origen S3 de DMS](https://docs.aws.amazon.com/dms/latest/userguide/CHAP_Source.S3.html), [destino Kinesis de DMS](https://docs.aws.amazon.com/dms/latest/userguide/CHAP_Target.Kinesis.html). |

## Prioridad de repaso

1. **Controles de acceso y seguridad:** IAM Identity Center, EFS security groups + IAM, S3 Access Points, VPC subnet sharing, TLS y certificados ACM.
2. **Cómputo:** qué paga ECS con EC2 frente a Fargate, opciones de Lambda y AMI frente a user data.
3. **Almacenamiento:** FSx for Lustre con S3 y mecanismos de copia masiva entre buckets.
4. **Selección múltiple:** revisar cada opción contra el requisito exacto; los cuatro fallos de este tipo fueron respuestas parcialmente correctas.

La tabla usa la puntuación entregada por el proveedor del examen. Las tres preguntas discutibles permanecen `draft` y llevan la etiqueta `source-answer-needs-review` en el contenido importado.
