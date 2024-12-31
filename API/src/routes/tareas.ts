import { Router } from "express";

const router = Router()

// Declaramos la ruta item
router.get("/", (req, res) => {
    res.send({data: "AQUÍ VAN LAS TAREAS"})
})

export {router}