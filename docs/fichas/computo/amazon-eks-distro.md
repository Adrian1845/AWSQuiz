# Amazon EKS Distro

[← Índice de servicios](../../guia-estudio-saa-sdd.md) · Revisión: 2026-10-23

## Qué hace

Distribución de los componentes Kubernetes usados por EKS.

## Cuándo elegirlo

Crear clústeres Kubernetes autogestionados compatibles.

## Detalles que deciden la respuesta

- Incluye componentes Kubernetes compatibles con los que usa EKS.
- El equipo instala y opera su clúster; la distribución no convierte el entorno en un servicio EKS administrado.

## Caso basado en escenario

**Situación:** Un equipo opera Kubernetes en sus propios hosts y quiere esa distribución.

**Elección:** EKS Distro. La pista decisiva es crear clústeres kubernetes autogestionados compatibles.

## Diferencia importante

EKS Anywhere añade herramientas de instalación y gestión sobre la distribución.

## Fuente oficial

- [Documentación de AWS](https://distro.eks.amazonaws.com/)
