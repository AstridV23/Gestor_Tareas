import { Request, Response } from "express";
import db from "../config/db";

export const getTasks = (req: Request, res: Response) => {
    try {
        const stmt = db.prepare("SELECT * FROM tasks");
        const tasks = stmt.all();
        res.json(tasks);
    } catch (error) {
        res.status(500).json({ error: "Error al obtener tareas" });
    }
}

export const createTask = (req: Request, res: Response) => {}

export const getTaskById = (req: Request, res: Response) => {}

export const updateTask = (req: Request, res: Response) => {}

export const deleteTask = (req: Request, res: Response) => {}

export const getTaskByUser = (req: Request, res: Response) => {}


