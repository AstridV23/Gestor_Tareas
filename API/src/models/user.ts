import db from "../config/db";

interface User {
    id?: number;
    nombre: string;
    email: string;
    password: string;
    fecha_creacion?: string;
}

class UserModel {
    // funciones para cada accion para usuarios
}

export default UserModel;