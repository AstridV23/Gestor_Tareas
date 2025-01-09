import { Auth } from "../interfaces/auth.interface";
import { User } from "../interfaces/user.interface";
import UserModel from "../models/userModel";
import { encryptPassword, comparePassword } from "../utils/bcrypt.handle"

// lógica de negocio para autenticación de usuarios

const registerNewUser = async (User: User) => {
    // Validar entrada del usuario
    if (!User.email || !User.password || !User.nombre) {
        return { error: "Missing required fields" };
    }
    
    // Verificar si el usuario ya existe
    const checkIs = UserModel.getUserByEmail(User.email);
    if (checkIs) return "User already exists";

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
    const checkIs = UserModel.getUserByEmail(auth.email);
    if (!checkIs) return "Not found user";

    // Verificar si la contraseña es correcta
    const passwordHash = checkIs.password; // la contraseña en la BD

    const isValid = await comparePassword(auth.password, passwordHash);

    if (!isValid) return "Invalid password";

    return checkIs; // el usuario encontrado en la DB
}

export { registerNewUser, loginUser };