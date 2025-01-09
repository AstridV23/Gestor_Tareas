import { hash, compare, genSalt } from "bcryptjs";

const encryptPassword = async (password: string): Promise<string> => {
    const salt = await genSalt(8); // Genera un salt con 8 rondas de complejidad
    const passwordHash = hash(password, salt); // Hashea la contraseña usando el salt
    return passwordHash;
}

const comparePassword = async (password: string, passwordHash: string) => {
    const isValid = await compare(password, passwordHash); // Compara la contraseña con el hash
    return isValid;
}

export { encryptPassword, comparePassword };