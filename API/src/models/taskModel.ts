import db from "../config/db";
import { Task } from "../interfaces/tarea.interface";

class TaskModel {
  // Crear una tarea
  static createTask(task: Task): Task {
    const stmt = db.prepare(`
      INSERT INTO tasks (titulo, descripcion, estado, fecha_limite, usuario_id, prioridad)
      VALUES (?, ?, ?, ?, ?, ?)
    `);
    const result = stmt.run(
      task.titulo,
      task.descripcion,
      task.estado || "pendiente",
      task.fecha_limite,
      task.usuario_id,
      task.prioridad
    );

    // Obtener el ID de la tarea recién creada
    const newTaskId = result.lastInsertRowid as number;

    // Consultar la tarea recién creada;
    const newTask = this.getTaskById(newTaskId); // Obtener el registro como un objeto Task

    return newTask; // Retornar la tarea como JSON
  }

  // Obtener todas las tareas
  static getTasks(): Task[] {
    const stmt = db.prepare(`SELECT * FROM tasks`);
    return stmt.all() as Task[]; // Retorna todas las tareas
  }

  // Obtener una tarea por ID de tarea
  static getTaskById(id: number): Task {
    const stmt = db.prepare(`SELECT * FROM tasks WHERE id = ?`);
    return stmt.get(id) as Task; // Retorna la tarea
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
          fecha_limite = COALESCE(?, fecha_limite),
          prioridad = COALESCE(?, prioridad)
      WHERE id = ?
    `);
    const result = stmt.run(
      task.titulo,
      task.descripcion,
      task.estado,
      task.fecha_limite,
      task.prioridad,
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
