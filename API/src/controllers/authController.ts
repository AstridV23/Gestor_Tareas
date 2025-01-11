import { Request, Response } from 'express';
import {registerNewUser, loginUser} from "../services/authService"
import {handleHTTP} from "../utils/error.handle"

// controladores para la autenticación de usuarios

const registerCtrl = async (req: Request, res: Response) => {
    try {
        const responseUser = await registerNewUser(req.body);

        res.status(201).json(responseUser);
    
    } catch (error) {
        handleHTTP(res, error);
    }
}

const loginCtrl = async (req: Request, res: Response) => {
    try {
        const { email, password } = req.body;
        const responseUser = await loginUser({ email, password });

        res.status(200).json(responseUser);

    } catch (error) {
        handleHTTP(res, error);
    }
}

export { registerCtrl, loginCtrl };