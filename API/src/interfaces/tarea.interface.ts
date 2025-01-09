export interface Task {
    id?: number;
    titulo: string;
    descripcion?: string;
    estado?: "pendiente" | "en progreso" | "completada";
    fecha_creacion?: string;
    fecha_limite?: string;
    usuario_id: number;
    prioridad: number;
}
