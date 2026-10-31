# AWS Certificate Manager (ACM)

[← Índice de servicios](../../guia-estudio-saa-sdd.md) · Revisión: 2026-10-26

## Qué hace

Aprovisiona, importa y gestiona certificados TLS para servicios integrados.

## Cuándo elegirlo

HTTPS en ALB o CloudFront; también permite usar certificados de terceros importados.

## Detalles que deciden la respuesta

- **Emitido por ACM:** puede tener renovación administrada si es elegible. Con validación DNS, ACM intenta renovarlo automáticamente; con validación por correo, el propietario debe atender los mensajes de validación.
- **Importado de una CA externa:** ACM **no lo renueva**. Hay que renovarlo fuera de ACM y volver a importarlo antes de que caduque.
- **CloudWatch:** ACM publica la métrica `DaysToExpiry` para todos los certificados, también los importados. Una alarma sobre esa métrica es una solución válida.
- **AWS Config:** la regla gestionada `ACM_CERTIFICATE_EXPIRATION_CHECK` marca como `NON_COMPLIANT` los certificados próximos a caducar. `daysToExpiration` vale **14** por defecto; configúralo en **30** si el requisito es avisar con 30 días de antelación y conecta la evaluación a una notificación SNS.
- **EventBridge:** ACM emite eventos diarios de próxima caducidad desde **30 días** antes para certificados públicos y **45 días** para privados e importados, salvo que se cambie la configuración. Un evento no envía por sí solo un correo al equipo: hay que configurar un destino.

## Caso basado en escenario

**Situación:** Una empresa importa en ACM un certificado de un tercero y quiere avisar al equipo de seguridad 30 días antes de su caducidad con el menor esfuerzo de scripting.

**Elección:** Regla gestionada de AWS Config con `daysToExpiration = 30` y notificación SNS. Una alarma de CloudWatch sobre `DaysToExpiry` también funcionaría; en esta pregunta de examen, Config se elige por disponer de una regla ya preparada. La renovación del certificado importado sigue siendo responsabilidad de la empresa.

## Diferencia importante

No memorices «certificado creado en ACM = alerta a los 30 días» ni «certificado importado = CloudWatch obligatorio». Separa **renovación** (automática o manual), **detección** de caducidad y **notificación** al equipo.

## Fuente oficial

- [Renovación administrada en ACM](https://docs.aws.amazon.com/acm/latest/userguide/managed-renewal.html).
- [Métrica `DaysToExpiry` de CloudWatch](https://docs.aws.amazon.com/acm/latest/userguide/cloudwatch-metrics.html).
- [Regla `ACM_CERTIFICATE_EXPIRATION_CHECK` de AWS Config](https://docs.aws.amazon.com/config/latest/developerguide/acm-certificate-expiration-check.html).
- [Eventos de caducidad de ACM](https://docs.aws.amazon.com/acm/latest/userguide/supported-events.html).
