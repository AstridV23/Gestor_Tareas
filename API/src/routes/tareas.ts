import { Router } from "express";
import { createTask, getTasks, getTaskById, getTaskByUser, updateTask, deleteTask } from "../controllers/taskController";
import { checkJWT } from "../middleware/session";

const router = Router()

// Declaramos las rutas tareas
router.get("/", checkJWT, getTasks); // checkJWT es un middleware que verifica el token
router.get("/:id", getTaskById);
router.post("/", createTask);
router.put("/:id", updateTask);
router.delete("/:id", deleteTask);
router.get("/usuario/:idUser", getTaskByUser);

export {router}