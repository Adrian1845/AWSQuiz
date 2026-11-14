# Examen 2: segundo intento

**Datos del 03-11-2026.** He unido los `assessment.id` de `exam2results2.json` con las 65 preguntas etiquetadas como `exam2`. Los 65 ID encajan y las puntuaciones coinciden con las opciones elegidas. Los aciertos son los de la clave del proveedor, no una nota escalada de AWS.

| Medida | Primer intento | Segundo intento |
|---|---:|---:|
| Preguntas respondidas | 28/50 (56,0 %) | **45/65 (69,2 %)** |
| Las 50 preguntas comunes | 28/50 | **36/50** |
| Las 15 que faltaban | — | **9/15** |
| Respuesta única, sobre las 50 comunes | 21/38 | **28/38** |
| Respuesta múltiple, sobre las 50 comunes | 7/12 | **8/12** |

En las 50 preguntas comparables corregiste **13**, cambiaste de correcta a incorrecta **5**, mantuviste **9** incorrectas y **23** correctas: mejora neta de **8 aciertos**. El 69,2 % del segundo intento no se puede comparar directamente con el 56,0 % del primero, porque este solo tenía 50 respuestas. Repetir preguntas tampoco equivale a un simulacro nuevo.

| Dominio en el segundo intento | Aciertos | Fallos | Cambio en las preguntas comunes |
|---|---:|---:|---:|
| Rendimiento | 13/24 | **11** | 11/18 → **10/18** |
| Seguridad | 14/17 | 3 | 7/12 → **10/12** |
| Resiliencia | 10/13 | 3 | 6/13 → **10/13** |
| Coste | 8/11 | 3 | 4/7 → **6/7** |

**El foco actual es rendimiento:** acumula 11 de los 20 fallos. En las preguntas etiquetadas con EFS fallaste 3/4 y con FSx 2/2; son muestras pequeñas y las etiquetas se solapan. La selección múltiple terminó en 10/14, por lo que no destaca como principal problema de este intento.

## Las 20 preguntas falladas

«Antes» indica si en el primer intento la pregunta estaba mal (`mal`), bien (`bien`) o sin responder (`nueva`). Las letras son las opciones del banco.

| Pregunta | Antes | Elegiste → clave | Regla que conviene recuperar |
|---|---|---|---|
| [API Gateway REST/WebSocket](../../src/content/questions/architecture/saa-source-184886705.md) | bien | D → A | REST: comunicación sin estado; WebSocket: conexión persistente. |
| [Permisos de EFS](../../src/content/questions/security/saa-source-184886709.md) | mal | B,C → A,B | Security Group + IAM; una NACL actúa en la subred, no concede acceso a una EC2 concreta. |
| [NFS local y archivado](../../src/content/questions/storage/saa-source-184886711.md) | mal | A → C | File Gateway expone NFS local y guarda objetos en S3, donde Lifecycle puede cambiar de clase. |
| [CloudFront con origen local](../../src/content/questions/networking/saa-source-184886717.md) | nueva | A → B | **Clave cuestionable**; ver auditoría. |
| [EDA con datos calientes](../../src/content/questions/storage/saa-source-184886727.md) | mal | B → C | FSx for Lustre es el sistema de archivos de alto rendimiento; EMR aporta procesamiento. |
| [Avisos de llamadas API](../../src/content/questions/operations/saa-source-184886739.md) | mal | C → D | CloudTrail registra llamadas; CloudWatch filtra y alarma; SNS avisa. Trusted Advisor no detecta este patrón. |
| [Coste de S3, EFS y EBS](../../src/content/questions/storage/saa-source-184886759.md) | nueva | A → B | En el caso dado, EBS cobra los 100 GB **aprovisionados**, aunque solo se guarde 1 GB. |
| [Subida diaria de 2 GB a S3](../../src/content/questions/storage/saa-source-184886763.md) | nueva | A → D | Multipart permite paralelismo. La mejora adicional de Transfer Acceleration depende de la ruta; ver auditoría. |
| [EFS desde otra región](../../src/content/questions/storage/saa-source-184886769.md) | bien | C → A | El acceso entre VPC y regiones es posible con conectividad adecuada; copiar a S3 no conserva el archivo compartido en vivo. |
| [Identidad multicuenta con AD](../../src/content/questions/security/saa-source-184886771.md) | mal | D → B | AD Connector + IAM Identity Center y permission sets. |
| [EBS como volumen de arranque](../../src/content/questions/architecture/saa-source-184886775.md) | mal | A,C → B,E | `st1` y `sc1` son HDD y no sirven como volúmenes de arranque; `gp2` e `io1` sí. |
| [Preparación visual de datos](../../src/content/questions/storage/saa-source-184886777.md) | mal | C → D | DataBrew encaja especialmente con recetas visuales y perfilado; la exclusión de Glue Studio es demasiado tajante. |
| [Juego global con UDP](../../src/content/questions/networking/saa-source-184886781.md) | nueva | D → B | Global Accelerator aporta IP estáticas, UDP y failover regional. |
| [ASG: rebalanceo y sustitución](../../src/content/questions/compute/saa-source-184886805.md) | mal | A,E → A,B | Recuerda el rebalanceo y la sustitución de instancias no sanas; el orden fino de actividades tiene poca prioridad. |
| [Tablas globales y regionales](../../src/content/questions/security/saa-source-184886811.md) | nueva | C → A | Ya se usa Aurora y se pide mínima refactorización: Aurora Global Database para los datos globales. |
| [Copia de AMI a otra región](../../src/content/questions/compute/saa-source-184886819.md) | mal | B → A | Una AMI respaldada por EBS lleva instantáneas al copiarse a otra región. |
| [SQL Server T-SQL a Aurora](../../src/content/questions/databases/saa-source-184886821.md) | bien | A,C → C,D | Babelfish reduce cambios T-SQL; conversión de esquema y DMS cubren la migración. |
| [ALB `/orders` y `/products`](../../src/content/questions/architecture/saa-source-184886823.md) | bien | B → D | Se distingue por **ruta**, no por cabecera HTTP. |
| [Microsoft DFS](../../src/content/questions/storage/saa-source-184886825.md) | bien | C → A | DFS/SMB apunta a FSx for Windows File Server; Lustre es para otros patrones de alto rendimiento. |
| [Informes S3 dos veces al año](../../src/content/questions/storage/saa-source-184886833.md) | nueva | A → B | **Clave cuestionable**; ver auditoría. |

## Claves que no tomaría como diagnóstico firme

- **[CloudFront y Route 53](../../src/content/questions/networking/saa-source-184886717.md):** la explicación afirma que CloudFront no puede usar un registro DNS de Route 53 como origen personalizado. AWS indica que el origen se configura con un **nombre DNS**, incluso el de un servidor propio. La A puede funcionar si ese registro apunta al servidor local; haría bucle si apunta a la misma distribución. El enunciado no aclara a dónde resuelve. [AWS: configuración del origen de CloudFront](https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/DownloadDistValuesOrigin.html)
- **[S3 Standard-IA frente a Intelligent-Tiering](../../src/content/questions/storage/saa-source-184886833.md):** ambas dan acceso inmediato. Intelligent-Tiering mueve objetos sin acceso durante 90 días a Archive Instant Access sin perder rendimiento, con coste de monitorización; Standard-IA cobra por recuperación. Sin distribución y tamaño de objetos, región y patrón exacto de lectura, no se puede demostrar que Standard-IA sea siempre la opción más barata. Tu A es defendible. [AWS: Intelligent-Tiering](https://docs.aws.amazon.com/AmazonS3/latest/userguide/intelligent-tiering-overview.html), [AWS: precios de S3](https://aws.amazon.com/s3/pricing/)
- **[Glue DataBrew frente a Glue Studio](../../src/content/questions/storage/saa-source-184886777.md):** las *recipes* y el perfilado hacen de DataBrew la opción más ajustada al texto. La explicación, sin embargo, dice que Glue Studio no ofrece perfilado, una afirmación demasiado amplia: AWS Glue Data Quality se integra en su editor visual. [AWS: Data Quality en Glue Studio](https://docs.aws.amazon.com/glue/latest/dg/data-quality-gs-studio.html)
- **[Multipart y Transfer Acceleration](../../src/content/questions/storage/saa-source-184886763.md):** subir 2 GB en una sola operación pierde la oportunidad de paralelismo. La clave supone además que Transfer Acceleration acelerará esa ruta; AWS lo plantea para transferencias a larga distancia y conviene medirlo. El enunciado no da la distancia. [AWS: Transfer Acceleration](https://docs.aws.amazon.com/AmazonS3/latest/userguide/transfer-acceleration.html)
- **[ASG y secuencia de actividades](../../src/content/questions/compute/saa-source-184886805.md):** la regla de rebalanceo sí importa. La secuencia exacta de sustitución depende también de políticas de mantenimiento de instancias, por lo que no dedicaría mucho tiempo a memorizar las palabras «simultáneamente» y «más tarde» de estas opciones. [AWS: políticas de mantenimiento de instancias](https://docs.aws.amazon.com/autoscaling/ec2/userguide/ec2-auto-scaling-instance-maintenance-policy.html)

## Repaso recomendado

1. **Almacenamiento y protocolos:** File Gateway/NFS/S3, EFS, FSx for Windows/DFS y FSx for Lustre. Rehaz [NFS local](../../src/content/questions/storage/saa-source-184886711.md), [EDA](../../src/content/questions/storage/saa-source-184886727.md) y [DFS](../../src/content/questions/storage/saa-source-184886825.md). Fichas: [EFS](../fichas/almacenamiento/amazon-efs.md) y [FSx](../fichas/almacenamiento/amazon-fsx.md).
2. **Elegir por la palabra decisiva:** UDP → Global Accelerator; rutas `/orders` → ALB por path; T-SQL → Babelfish y migración; varios entornos con AD → Identity Center. Rehaz las cinco regresiones antes de abrir más material.
3. **Detalles de S3 y EC2 de rendimiento:** multipart para objetos grandes, coste por capacidad aprovisionada de EBS, AMI con instantáneas y clases de almacenamiento según acceso y coste. Evita memorizar la clave discutible de Intelligent-Tiering.

**Lectura práctica:** 45/65 es una mejora real sobre las preguntas comunes, con avance claro en seguridad y resiliencia. Aún no da un margen cómodo para un examen nuevo: rendimiento quedó en 13/24 y parte de este resultado procede de preguntas ya vistas. Da más peso a un simulacro nuevo y a las reglas reutilizables que a estas cinco claves con matices.
