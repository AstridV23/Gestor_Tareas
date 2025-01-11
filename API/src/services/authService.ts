import { Auth } from "../interfaces/auth.interface";
import { User } from "../interfaces/user.interface";
import UserModel from "../models/userModel";
import { encryptPassword, comparePassword } from "../utils/bcrypt.handle"
import { generateToken } from "../utils/jwt.handle";

// lógica de negocio para autenticación de usuarios

const registerNewUser = async (User: User) => {
    // Validar entrada del usuario
    if (!User.email || !User.password || !User.nombre) {
        return { error: "Missing required fields" };
    }
    
    // Verificar si el usuario ya existe
    const checkIs = UserModel.getUserByEmail(User.email);
    if (checkIs) return { error: "User already exists" };

    // hashear la contraseña
    const hashedPassword = await encryptPassword(User.password);

    // Actualizar el objeto con la contraseña hasheada
    User.password = hashedPassword; 
    const newUser = UserModel.createUser(User);

    return newUser;
}

const loginUser = async (auth: Auth) => {
    // Validar entrada del usuario
    if (!auth.email || !auth.password) {
        return { error: "Missing required fields" };
    }
    
    // Verificar si el usuario ya existe
    const user = UserModel.getUserByEmail(auth.email);
    if (!user ) return { error: "Not found user" };

    // Verificar si la contraseña es correcta
    const passwordHash = user.password; // la contraseña en la BD
    const isValid = await comparePassword(auth.password, passwordHash);

    if (!isValid) return { error: "Invalid password" };
    
    // Generar token de usuario
    const token = generateToken(user.email, user.nombre);

    const data = {
        email: user.email,
        nombre: user.nombre,
        token
    }

    return data; // Devuelve el token de usuario junto con su información
}

export { registerNewUser, loginUser };