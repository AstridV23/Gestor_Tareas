import { Auth } from "./auth.interface";

export interface User extends Auth {
    id?: number;
    nombre: string;
    rol?: "admin" | "usuario" | "lider" ;
    fecha_creacion?: string;
}