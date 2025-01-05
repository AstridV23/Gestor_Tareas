import { Request, Response } from "express";
import { handleHTTP } from "../utils/error.handle";
import UserModel from "../models/userModel";

// Obtener todos los usuarios
export const getUsers = (res: Response) => {
    try {
        const users = UserModel.getUsers();
        res.status(200).json(users);
    } catch (error) {
        handleHTTP(res, error);      
    }
};

// Crear un nuevo usuario
export const createUser = (req: Request, res: Response) => {
    const { nombre, email, password, rol } = req.body;
    try {
        const newUser = UserModel.createUser({ nombre, email, password, rol });
        res.status(201).json({ message: "Usuario creado exitosamente", user: newUser });
    } catch (error) {
        handleHTTP(res, error);   
    }
};

export const getUserById = (req: Request, res: Response) => {
    const { id } = req.params;
    try {
        const user = UserModel.getUserById(parseInt(id)); // Obtiene un usuario por su ID
        res.status(200).status(200).json(user);
    } catch (error) {
        handleHTTP(res, error);   
    }
};

export const updateUser = (req: Request, res: Response) => {
    const { id } = req.params;
    const { nombre, email, password, rol } = req.body;
    try {
        const result = UserModel.updateUser(parseInt(id), { nombre, email, password, rol });
        res.status(200).json({ changes: result });
    } catch (error) {
        handleHTTP(res, error);   
    }
};

export const deleteUser = (req: Request, res: Response) => {
    const { id } = req.params;
    try {
        const result = UserModel.deleteUser(parseInt(id));
        res.status(200).json({ changes: result });
    } catch (error) {
        handleHTTP(res, error);   
    }
};

export const getUserByEmail = (req: Request, res: Response) => {
    const { email } = req.params;
    try {
        const user = UserModel.getUserByEmail(email);
        res.status(200).json(user);
    } catch (error) {
        handleHTTP(res, error);   
    }
}

