import "dotenv/config"
import express from "express" 
import cors from "cors"
import {router} from "./routes"
import dotenv from "dotenv"

// Cargar las variables de entorno desde el archivo .env
dotenv.config();

const PORT = process.env.PORT || 3000
const app = express()

// especifica quienes pueden consumir la api
app.use(cors(
    {
        origin: "*"
    }
))

// especifica las rutas
app.use(router)

// indica que recibira json
app.use(express.json())

// escucha el puerto
app.listen(PORT, () => console.log('listening on port ' + PORT ))

// devuelve un mensaje de éxito desde la ruta principal
app.get("/", (req, res) => {
    res.send("Hello desde la API!")
})