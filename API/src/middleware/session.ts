import { Request, Response, NextFunction } from 'express';
import { verifyToken } from '../utils/jwt.handle';

// middleware para verificar el token, se implementa en la ruta que se desea proteger

// verifica la sesion del usuario
const checkJWT = async (req: Request, res: Response, next: NextFunction) => {
    try {
        // busca en el header de la petición el token en el campo authorization
        const jwtByUser = req.headers.authorization || '';
        const token = jwtByUser.split(' ').pop();
        console.log({jwtByUser})
        console.log({token})
        
        const isOk = await verifyToken(`${token}`);
        console.log({isOk})
        
        if (!isOk) {
            res.status(401).json({error: "Sesion no valida"})
        } else{
            console.log("Sesion valida")
            next();
        }

    } catch (error) {
        res.status(400).json({error: "Sesion no valida"})
    }
}

export { checkJWT };