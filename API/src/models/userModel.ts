import db from "../config/db";

interface User {
    id?: number;
    nombre: string;
    email: string;
    password: string;
    rol?: "admin" | "usuario" | "lider" ;
    fecha_creacion?: string;
}

// funciones para cada accion para usuarios
class UserModel {

    static createUser(user: User): User {
        const stmt = db.prepare(`
            INSERT INTO users (nombre, email, password, rol)
            VALUES (?, ?, ?, ?)
        `);
        const result = stmt.run(
            user.nombre,
            user.email,
            user.password,
            user.rol || "usuario"
        );
        

        // Obtener el ID del usuario recién creado
        const newUserId = result.lastInsertRowid as number;
        
        // Consultar el usuario recién creado;
        const newUser = this.getUserById(newUserId); // Obtener el registro como un objeto User

        return newUser; // Retornar el usuario como JSON
    }

    static getUsers(): User[] {
        const stmt = db.prepare(`SELECT * FROM users`);
        return stmt.all() as User[];
    }

    static getUserById(id: number): User {
        const stmt = db.prepare(`SELECT * FROM users WHERE id = ?`);
        return stmt.get(id) as User;
    }

    static updateUser(id: number, user: Partial<User>): number {
        const stmt = db.prepare(`
            UPDATE users
            SET nombre = COALESCE(?, nombre),
                email = COALESCE(?, email),
                password = COALESCE(?, password),
                rol = COALESCE(?, rol)
            WHERE id = ?
        `);
        const result = stmt.run(
            user.nombre,
            user.email,
            user.password,
            user.rol,
            id
        );
        return result.changes;
    }

    static deleteUser(id: number): number {
        const stmt = db.prepare(`DELETE FROM users WHERE id = ?`);
        const result = stmt.run(id);
        return result.changes;
    }

    static getUserByEmail(email: string): User {
        const stmt = db.prepare(`SELECT * FROM users WHERE email = ?`);
        return stmt.get(email) as User;
    }

    static getUserByEmailAndPassword(email: string, password: string): User {
        const stmt = db.prepare(`SELECT * FROM users WHERE email = ? AND password = ?`);
        return stmt.get(email, password) as User;
    }

}

export default UserModel;