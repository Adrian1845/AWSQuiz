# AWS Lambda

[← Índice de servicios](../../guia-estudio-saa-sdd.md) · Revisión: 2026-10-23

## Qué hace

Ejecuta código por eventos sin administrar servidores.

## Cuándo elegirlo

Tareas breves y desacopladas.

## Detalles que deciden la respuesta

- Diseña funciones sin estado y guarda datos duraderos fuera de la ejecución.
- Las invocaciones síncronas, asíncronas y desde colas tienen errores y reintentos diferentes; controla concurrencia y tiempos de ejecución.

## Opciones y límites

Lambda ejecuta funciones ante eventos y escala invocaciones sin operar una flota. Diseña **idempotencia**: una entrega o un reintento puede repetir el trabajo. La invocación **síncrona** devuelve respuesta al llamador; la **asíncrona** deposita el evento para ejecución posterior; con SQS, Lambda sondea lotes de mensajes y el timeout/visibility timeout de la cola deben encajar con el tiempo de procesamiento. Elige almacenamiento externo para estado persistente. [Tipos de invocación](https://docs.aws.amazon.com/lambda/latest/dg/lambda-invocation.html).

| Requisito | Elección orientativa |
|---|---|
| Código breve disparado por evento | Lambda. |
| Contenedor que atiende continuamente | [ECS/Fargate](aws-fargate.md). |
| Dependencia de SO, proceso prolongado o hardware especial | [EC2](amazon-ec2.md). |

## Caso basado en escenario

**Situación:** Cada objeto subido debe generar una miniatura.

**Elección:** Lambda activada por evento de S3. La pista decisiva es tareas breves y desacopladas.

## Diferencia importante

Elige Fargate o EC2 si el trabajo necesita un proceso persistente, mayor control del entorno o no cabe en los límites de Lambda.

## Fuente oficial

- [Documentación de AWS](https://docs.aws.amazon.com/lambda/latest/dg/welcome.html)
