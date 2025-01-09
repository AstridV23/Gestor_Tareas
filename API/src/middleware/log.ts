import { Request, Response, NextFunction } from "express";

// controla antes de la funcion
// funciona en las rutas que se le indique
const logMiddleware = (req: Request, res: Response, next: NextFunction) => {
    const header = req.headers;
    const userAgent = req.get('User-Agent');
    console.log('Headers: ', header);
    console.log('User-Agent: ', userAgent);
    next();
};

export default logMiddleware;