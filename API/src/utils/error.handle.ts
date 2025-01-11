import { Response } from "express";

// Manejador de errores, se le pasa el respose y el error

export const handleHTTP = (res: Response, error: unknown) => {
    
    console.error(`ERROR: ${error}`);

    if (error instanceof Error) {
        res.status(500).json({ success: false, message: error.message });
    } else {
        res.status(500).json({ error: "Unknown error" });
    }
    
};