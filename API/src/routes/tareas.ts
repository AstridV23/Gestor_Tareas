import { Router } from "express";
import { createTask, getTasks, getTaskById, getTaskByUser, updateTask, deleteTask } from "../controllers/taskController";
import logMiddleware from "../middleware/log";

const router = Router()

// Declaramos las rutas tareas
router.get("/", logMiddleware, getTasks);
router.get("/:id", getTaskById);
router.post("/", createTask);
router.put("/:id", updateTask);
router.delete("/:id", deleteTask);
router.get("/usuario/:idUser", getTaskByUser);

export {router}