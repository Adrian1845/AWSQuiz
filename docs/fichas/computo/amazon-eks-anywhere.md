# Amazon EKS Anywhere

[← Índice de servicios](../../guia-estudio-saa-sdd.md) · Revisión: 2026-10-23

## Qué hace

Distribución y operación de Kubernetes en infraestructura propia.

## Cuándo elegirlo

Clústeres locales compatibles con el enfoque EKS.

## Detalles que deciden la respuesta

- Ayuda a crear y operar clústeres Kubernetes en infraestructura propia.
- Es útil para cargas que deben ejecutarse fuera de regiones AWS mientras siguen un enfoque de operación Kubernetes.

## Caso basado en escenario

**Situación:** Una planta requiere Kubernetes local desconectado del plano de datos de la nube.

**Elección:** EKS Anywhere. La pista decisiva es clústeres locales compatibles con el enfoque eks.

## Diferencia importante

EKS regional administra el plano de control en AWS; EKS Anywhere implica operar la infraestructura local.

## Fuente oficial

- [Documentación de AWS](https://docs.aws.amazon.com/eks-anywhere/latest/userguide/overview.html)
