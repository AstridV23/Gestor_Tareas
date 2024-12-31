// /src/models/TaskModel.ts
import db from "../config/db";

interface Task {
    id?: number;
    titulo: string;
    descripcion?: string;
    estado?: "pendiente" | "en progreso" | "completada";
    fecha_creacion?: string;
    fecha_limite?: string;
    usuario_id: number;
}

class TaskModel {
  // Crear una tarea
  static createTask(task: Task): number {
    const stmt = db.prepare(`
      INSERT INTO tasks (titulo, descripcion, estado, fecha_limite, usuario_id)
      VALUES (?, ?, ?, ?, ?)
    `);
    const result = stmt.run(
      task.titulo,
      task.descripcion,
      task.estado || "pendiente",
      task.fecha_limite,
      task.usuario_id
    );
    return result.lastInsertRowid as number; // Retorna el ID de la tarea creada
  }

  // Obtener todas las tareas de un usuario
  static getTasksByUser(userId: number): Task[] {
    const stmt = db.prepare(`SELECT * FROM tasks WHERE usuario_id = ?`);
    return stmt.all(userId) as Task[]; // Retorna todas las tareas del usuario
  }

  // Actualizar una tarea
  static updateTask(id: number, task: Partial<Task>): number {
    const stmt = db.prepare(`
      UPDATE tasks
      SET titulo = COALESCE(?, titulo),
          descripcion = COALESCE(?, descripcion),
          estado = COALESCE(?, estado),
          fecha_limite = COALESCE(?, fecha_limite)
      WHERE id = ?
    `);
    const result = stmt.run(
      task.titulo,
      task.descripcion,
      task.estado,
      task.fecha_limite,
      id
    );
    return result.changes; // Retorna el número de filas afectadas
  }

  // Eliminar una tarea
  static deleteTask(id: number): number {
    const stmt = db.prepare(`DELETE FROM tasks WHERE id = ?`);
    const result = stmt.run(id);
    return result.changes; // Retorna el número de filas afectadas
  }
}

export default TaskModel;
