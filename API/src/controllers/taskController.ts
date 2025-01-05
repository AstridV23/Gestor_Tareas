import { Request, Response } from "express";
import { handleHTTP } from "../utils/error.handle";
import TaskModel from "../models/taskModel";

// Crea una tarea
export const createTask = (req: Request, res: Response) => {
    try {
        const { titulo, descripcion, estado, fecha_limite, usuario_id, prioridad } = req.body;
        const newTask = TaskModel.createTask({ titulo, descripcion, estado, fecha_limite, usuario_id, prioridad });
        res.status(201).json({ messeage: "Tarea creada exitosamente", newTask });
    } catch (error) {
        handleHTTP(res, error);
    }
}

// Trae todas las tareas
export const getTasks = (req: Request, res: Response) => {
    try {
        const tasks = TaskModel.getTasks();
        res.status(200).json(tasks);
    } catch (error) {
        handleHTTP(res, error);
    }
}

// Trae una tarea por ID
export const getTaskById = (req: Request, res: Response) => {
    try {
        const { idTask } = req.params
        const task = TaskModel.getTaskById(parseInt(idTask));
        res.status(200).json(task || {Message: "Tarea no encontrada"}); 
    } catch (error) {
        handleHTTP(res, error);
    }
}

// Trae las tareas por ID de usuario
export const getTaskByUser = (req: Request, res: Response) => {
    try {
        const { idUser } = req.params;
        const tasks = TaskModel.getTasksByUser(parseInt(idUser));
        res.status(200).json(tasks);
    } catch (error) {
        handleHTTP(res, error);
    }
}

// Actualiza una tarea
export const updateTask = (req: Request, res: Response) => {
    try {
        const { id } = req.params; // ID de la tarea
        const { titulo, descripcion, estado, fecha_limite, prioridad } = req.body; // Datos a actualizar
        const result = TaskModel.updateTask(parseInt(id), { titulo, descripcion, estado, fecha_limite, prioridad });
        res.status(200).json({ message: "Tarea actualizada con éxito", changes: result });
    } catch (error) {
        handleHTTP(res, error);
    }
}

// Elimina una tarea
export const deleteTask = (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const result = TaskModel.deleteTask(parseInt(id));
        res.status(200).json({ changes: result });
    } catch (error) {
        handleHTTP(res, error);
    }
}



