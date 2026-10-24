# AWS DataSync

[← Índice de servicios](../../guia-estudio-saa-sdd.md) · Revisión: 2026-10-23

## Qué hace

Mueve datos entre almacenamiento local, AWS y otros destinos compatibles.

## Cuándo elegirlo

Transferencias en línea de archivos u objetos.

## Detalles que deciden la respuesta

- Agente o endpoints conectan orígenes y destinos admitidos para copiar datos en línea.
- Programa tareas y verifica transferencias de grandes conjuntos de archivos u objetos.

## Caso basado en escenario

**Situación:** Millones de archivos NAS deben copiarse a EFS.

**Elección:** DataSync. La pista decisiva es transferencias en línea de archivos u objetos.

## Diferencia importante

Storage Gateway ofrece acceso híbrido continuo; DataSync ejecuta tareas de transferencia.

## Fuente oficial

- [Documentación de AWS](https://docs.aws.amazon.com/datasync/latest/userguide/what-is-datasync.html)
