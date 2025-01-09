import { Request, Response, Router } from "express";
import {registerCtrl, loginCtrl} from "../controllers/authController"

const router = Router()

// Declaramos las rutas de autenticación

/** .../auth/login [POST] */
router.post("/login", loginCtrl);
/** .../auth/register [POST] */
router.post("/register", registerCtrl);

export {router}