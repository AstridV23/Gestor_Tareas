import {sign, verify} from "jsonwebtoken"

const jsonwebtoken = process.env.JWT_SECRET

if (!jsonwebtoken) throw new Error("JWT_SECRET is not defined in the environment variables");

const generateToken = (email: string, name: string) => {
    // responde con un token
    const jwt = sign({email, name}, jsonwebtoken, {expiresIn: "5h"})
    return jwt
}

const verifyToken = async (token: string): Promise<boolean> => {
    try {
        verify(token, jsonwebtoken); // Si no lanza error, el token es válido
        return true;
    } catch (error) {
        console.error("Error al verificar el token");
        return false; // Si ocurre un error, el token no es válido
    }
};

export { generateToken, verifyToken };