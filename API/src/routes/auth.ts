import { Request, Response, Router } from "express";
import {registerCtrl, loginCtrl} from "../controllers/authController"

const router = Router()

router.post("/login", loginCtrl(), (req: Request, res: Response) => {
    /** .../auth/login [POST] */
})

router.post("/register", registerCtrl(), (req: Request, res: Response) => {
    /** .../auth/register [POST] */
})

export {router}