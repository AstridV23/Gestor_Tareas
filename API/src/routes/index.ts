import { Router } from "express";
import { readdirSync } from "fs";

// devuelve la ruta del directorio actual
const PATH_ROUTER = __dirname;

// instancia de un enrutador de Express que se usará para registrar las rutas
const router = Router();

// quita la extensión de un archivo
const cleanFileName = (fileName: string) => {
    const file = fileName.split(".").shift(); // retorna el primer elemento del array
    return file;
};

// lee los archivos del directorio actual menos el index
readdirSync(PATH_ROUTER).filter((fileName) => {
    const cleanName = cleanFileName(fileName);
    
    if (cleanName !== "index") {
        
        // importa dinámicamente los archivos de rutas
        import(`./${cleanName}`).then((module) => {
            //asocia la ruta con el enrutador
            router.use(`/${cleanName}`, module.router);
            console.log(`Ruta /${cleanName} importada correctamente`);

            // El módulo importado debe exportar un objeto llamado router que contiene las rutas específicas del archivo

        }).catch((err) => {
            console.error(`Error importing ${fileName}:`, err);

        });
    }

});

export { router };