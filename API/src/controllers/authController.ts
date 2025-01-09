import { Request, Response } from 'express';
import {registerNewUser, loginUser} from "../services/authService"

const registerCtrl = async (req: Request, res: Response) => {
    const responseUser = await registerNewUser(req.body.email, req.body.password)
}

const loginCtrl = async (req: Request, res: Response) => {

}

export { registerCtrl, loginCtrl };