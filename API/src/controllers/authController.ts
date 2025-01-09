import { Request, Response } from 'express';
import {registerNewUser, loginUser} from "../services/authService"

const registerCtrl = async (req: Request, res: Response) => {
    const responseUser = await registerNewUser(req.body);
    res.json(responseUser);
}

const loginCtrl = async (req: Request, res: Response) => {
    const { email, password } = req.body;
    const responseUser = await loginUser({ email, password });
    res.json(responseUser);
}

export { registerCtrl, loginCtrl };