# Amazon EC2

[← Índice de servicios](../../guia-estudio-saa-sdd.md) · Revisión: 2026-10-23

## Qué hace

EC2 proporciona máquinas virtuales. Al lanzarlas eliges una AMI, tipo y tamaño de instancia, subred, grupos de seguridad, almacenamiento y modelo de compra. La aplicación y el sistema operativo siguen bajo tu responsabilidad. Es la opción cuando se necesita acceso al SO, software específico, hardware especializado o un proceso de larga duración que no encaja en un servicio administrado.

## Cuándo elegirlo

Antes de escoger un tipo concreto, identifica el recurso que domina la carga:

| Familia o serie | Recurso dominante | Ejemplo de escenario |
|---|---|---|
| **T** | CPU variable con créditos | Servidor pequeño con periodos de reposo y picos breves. |
| **M** | Equilibrio de CPU y memoria | Aplicación web general. |
| **C** | CPU sostenida | Codificación de vídeo o procesamiento por lotes intensivo. |
| **R, X, U** | Memoria | Base de datos en memoria o conjunto de datos grande. |
| **I, D** | Almacenamiento local y E/S | Índice o procesamiento que requiere alto rendimiento de disco local. |
| **G, P, Inf, Trn** | Aceleradores | Gráficos, entrenamiento o inferencia ML según hardware. |
| **Hpc** | Cómputo científico | Simulación estrechamente acoplada. |

La letra inicial orienta, pero generación, arquitectura de CPU, tamaño, red y almacenamiento disponible también importan. Por ejemplo, el sufijo `d` indica que el tipo incluye volúmenes *instance store*; no todos los tipos los tienen. Verifica la ficha del tipo antes de diseñar una carga. [Familias y nombres de instancias](https://docs.aws.amazon.com/ec2/latest/instancetypes/instance-type-names.html).

## Detalles que deciden la respuesta

### Placement groups: cluster, spread, partition y precision time

| Estrategia | Qué optimiza | Pista de examen |
|---|---|---|
| **Cluster** | Coloca instancias cerca dentro de **una AZ** para baja latencia y alto rendimiento entre nodos. | HPC o comunicación intensa entre servidores. |
| **Spread** | Separa un grupo pequeño de instancias críticas en hardware distinto. | Reducir fallos correlacionados entre pocos nodos. |
| **Partition** | Separa grupos de instancias por particiones de hardware. | Réplicas de Kafka, Cassandra o Hadoop conscientes de topología. |
| **Precision time** | Acceso a fuentes de tiempo de alta precisión en hardware compatible. | Sincronización temporal muy precisa. |

Un placement group decide colocación física, no sustituye desplegar en varias AZ ni realizar backups. La capacidad disponible y las restricciones de cada estrategia pueden afectar el lanzamiento. [Estrategias oficiales](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/placement-groups.html).

### Almacenamiento: EBS, instance store, EFS y S3

| Opción | Modelo y duración | Cuándo elegirla |
|---|---|---|
| [**EBS**](../almacenamiento/amazon-ebs.md) | Bloques persistentes, volumen en una AZ; snapshots para respaldo y restauración. | Disco de sistema, base de datos o datos que deben sobrevivir a una parada. |
| **Instance store** | Disco local temporal de algunos tipos EC2. Conserva datos tras *reboot*, pero los pierde al detener, hibernar o terminar. | Caché, scratch o datos reproducibles de alto rendimiento. |
| [**EFS**](../almacenamiento/amazon-efs.md) | Sistema de archivos NFS compartido para clientes Linux; la variante Regional permite acceso entre AZ. | Varias instancias necesitan los mismos archivos al mismo tiempo. |
| [**S3**](../almacenamiento/amazon-s3.md) | Objetos accedidos por API/HTTP. | Ficheros, medios, backups o data lake, sin semántica de disco POSIX. |

Un EBS y la instancia que lo monta deben estar en la misma AZ. Si falla una instancia, el volumen EBS puede conservarse según su configuración; *instance store* no es almacenamiento duradero. [EBS](https://docs.aws.amazon.com/ebs/latest/userguide/what-is-ebs.html) · [instance store](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/instance-store-lifetime.html) · [EFS](https://docs.aws.amazon.com/efs/latest/ug/whatisefs.html).

### Reboot, stop, hibernate y terminate

| Acción | RAM y procesos | EBS | Instance store |
|---|---|---|---|
| **Reboot** | Se reinician. | Se conserva. | Se conserva. |
| **Stop/start** | Se pierden. | Se conserva. | Se pierde. |
| **Hibernate/start** | Se guardan en el volumen raíz EBS y se restauran. | Se conserva. | Se pierde. |
| **Terminate** | Se pierden. | El volumen raíz sigue `DeleteOnTermination`; otros volúmenes según configuración. | Se pierde. |

Hibernación sirve cuando reconstruir el estado en memoria es lento. Debe habilitarse **al lanzar** la instancia, con una AMI y tipo compatibles, volumen raíz **EBS cifrado** y espacio suficiente para la RAM. No se puede habilitar después en una instancia existente. Una instancia hibernada deja de facturar cómputo mientras está detenida, pero sigue facturando EBS. AWS no permite hibernar instancias de un Auto Scaling group. [Requisitos](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/hibernating-prerequisites.html) · [comportamiento](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/instance-hibernate-overview.html).

### Compra y capacidad

| Modelo | Señal principal |
|---|---|
| **On-Demand** | Uso variable o temporal sin compromiso. |
| **Savings Plans / Reserved Instances** | Uso base predecible y compromiso de gasto; revisa condiciones de flexibilidad. |
| [**Spot**](../complementos/amazon-ec2-spot.md) | Trabajo interrumpible, con checkpoints y reintentos. |
| [**Capacity Reservation**](../complementos/amazon-ec2-capacity-reservations.md) | Se debe garantizar capacidad en una AZ específica. |
| **Dedicated Instances** | Instancias en hardware dedicado a una cuenta, sin elegir ni identificar el host físico. |
| **Dedicated Hosts** | Servidor físico dedicado con visibilidad y control de colocación, útil para licencias ligadas a sockets o núcleos. |

**Dedicated Instance frente a Dedicated Host:** ambos usan hardware dedicado, pero una Dedicated Instance se factura por instancia y **no** ofrece ID de host, visibilidad de sockets/núcleos, colocación dirigida ni afinidad de host. Puede compartir hardware con otras instancias de la misma cuenta. Un Dedicated Host se factura por host y permite conocer el servidor físico, colocar instancias en él y mantener afinidad; por eso encaja con requisitos de licencias BYOL ligadas al host. Si solo se exige aislamiento físico de instancias de otras cuentas, Dedicated Instances pueden bastar. [Comparación oficial](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/dedicated-instance.html) · [Dedicated Hosts](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/dedicated-hosts-overview.html).

El descuento, la tenencia dedicada y la reserva de capacidad son decisiones distintas. Para una capa web continua, combina instancias reemplazables con [EC2 Auto Scaling](amazon-ec2-auto-scaling.md) y un balanceador.

## Caso basado en escenario

**Situación:** una empresa opera tres nodos de una base distribuida en EC2. Cada réplica debe evitar compartir hardware con las demás. Los datos duraderos deben sobrevivir al reemplazo de un nodo, pero los archivos temporales se regeneran. Además, el proceso tarda veinte minutos en reconstruir su caché en RAM cuando se detiene por mantenimiento.

**Elección:** usar un placement group **spread** para los pocos nodos críticos; guardar datos duraderos en **EBS** y scratch en **instance store** si el tipo elegido lo ofrece. Para reanudar el mismo estado de procesos tras una parada planificada, lanzar instancias compatibles con **hibernación** habilitada desde el inicio. Si la aplicación necesitara un directorio NFS compartido por todos los nodos, usar **EFS** para ese requisito concreto.

**Por qué:** cluster favorecería rendimiento entre nodos, mientras que el requisito dominante aquí es aislar fallos de hardware. Instance store no sirve para el dato que debe sobrevivir a stop/terminate. Stop/start conservaría EBS, pero no la RAM; hibernate conserva ambos bajo sus requisitos.

**Caso de tenencia:** una empresa debe ejecutar EC2 en hardware que no aloje instancias de otras cuentas, pero no necesita identificar un servidor concreto ni reutilizar licencias por núcleo. Elige **Dedicated Instances**. Si el contrato de licencias exige conocer sockets/núcleos y mantener las instancias en hosts identificables, elige **Dedicated Hosts**.

## Diferencia importante

EC2 es la máquina. EBS, instance store y EFS resuelven modelos de almacenamiento diferentes; Auto Scaling resuelve reemplazo y tamaño de flota; un placement group resuelve colocación. En una pregunta, localiza primero el requisito dominante antes de elegir uno de ellos.

## Fuentes oficiales

- [Tipos y familias de EC2](https://docs.aws.amazon.com/ec2/latest/instancetypes/)
- [Placement groups](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/placement-groups.html)
- [Hibernación](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/Hibernate.html)
- [Duración de instance store](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/instance-store-lifetime.html)
- [Dedicated Instances y comparación con Dedicated Hosts](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/dedicated-instance.html)
