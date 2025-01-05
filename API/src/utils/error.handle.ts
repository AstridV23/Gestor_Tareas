import { Response } from "express";

export const handleHTTP = (res: Response, error: unknown) => {
    if (error instanceof Error) {
        console.error(`ERROR: ${error}`);
        res.status(500).json({ success: false, message: error.message });
    } else {
        res.status(500).json({ error: "Unknown error" });
    }
};