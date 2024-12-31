import { Request, Response } from "express";
import db from "../config/db"; // Importamos la base de datos
import { handleHTTP } from "../utils/error.handle";

// Obtener todos los usuarios
export const getUsers = (req: Request, res: Response) => {
    try {
        const stmt = db.prepare("SELECT * FROM users");
        const users = stmt.all(); // obtiene todos los usuarios
        res.json(users);
    } catch (error) {
        handleHTTP(res, error);      
    }
};

// Crear un nuevo usuario
export const createUser = (req: Request, res: Response) => {
    const { nombre, email, password } = req.body;
    try {
        const stmt = db.prepare("INSERT INTO users (nombre, email, password) VALUES (?, ?, ?)");
        stmt.run(nombre, email, password); // Inserta un nuevo usuario
        res.status(201).json({ message: "Usuario creado exitosamente" });
    } catch (error) {
        res.status(500).json({ error: "Error al crear usuario" });
    }
};

export const getUserById = (req: Request, res: Response) => {};

export const updateUser = (req: Request, res: Response) => {};

export const deleteUser = (req: Request, res: Response) => {};