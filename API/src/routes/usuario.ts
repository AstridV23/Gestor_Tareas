import { Router } from "express";
import { getUsers, createUser, getUserById, updateUser, deleteUser, getUserByEmail } from "../controllers/userController";

const router = Router()

// Declaramos las rutas usuario
router.get("/", getUsers);
router.get("/:id", getUserById);
router.post("/", createUser);
router.put("/:id", updateUser);
router.delete("/:id", deleteUser);
router.get("/email/:email", getUserByEmail);

export {router}