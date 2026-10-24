# Amazon EKS

[← Índice de servicios](../../guia-estudio-saa-sdd.md) · Revisión: 2026-10-23

## Qué hace

Kubernetes administrado.

## Cuándo elegirlo

Equipos que necesitan API y ecosistema Kubernetes.

## Detalles que deciden la respuesta

- AWS administra el plano de control Kubernetes; el equipo sigue definiendo nodos o Fargate, pods y políticas.
- Permite reutilizar manifiestos, operadores y herramientas del ecosistema Kubernetes.

## Caso basado en escenario

**Situación:** La plataforma ya usa manifiestos y operadores Kubernetes.

**Elección:** EKS. La pista decisiva es equipos que necesitan api y ecosistema kubernetes.

## Diferencia importante

No elegir por usar contenedores solamente: ECS suele requerir menos conocimiento de Kubernetes.

## Fuente oficial

- [Documentación de AWS](https://docs.aws.amazon.com/eks/latest/userguide/what-is-eks.html)
