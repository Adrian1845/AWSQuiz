# Amazon ECR

[← Índice de servicios](../../guia-estudio-saa-sdd.md) · Revisión: 2026-10-23

## Qué hace

Registro de imágenes de contenedor.

## Cuándo elegirlo

Almacenar y distribuir imágenes privadas.

## Detalles que deciden la respuesta

- Almacena imágenes de contenedor privadas y admite control de acceso por IAM.
- Gestiona etiquetas, escaneo y ciclos de vida de imágenes antes de desplegarlas.

## Caso basado en escenario

**Situación:** El pipeline debe publicar la imagen que desplegará ECS.

**Elección:** ECR. La pista decisiva es almacenar y distribuir imágenes privadas.

## Diferencia importante

ECR es el registro; ECS/EKS ejecutan y supervisan los contenedores.

## Fuente oficial

- [Documentación de AWS](https://docs.aws.amazon.com/AmazonECR/latest/userguide/what-is-ecr.html)
