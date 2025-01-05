import fs from "fs";
import path from "path";
import Database from "better-sqlite3";

// Ruta directa dentro de la carpeta src/db
const dbPath = path.join(__dirname, "../db/database.db");

// Verifica y crea el directorio db si no existe
const dbDir = path.dirname(dbPath);
if (!fs.existsSync(dbDir)) {
  fs.mkdirSync(dbDir, { recursive: true });
}

// Inicializa la base de datos
const db = new Database(dbPath);

// crea las tablas
db.exec(`
  CREATE TABLE IF NOT EXISTS users (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    nombre TEXT NOT NULL,
    email TEXT NOT NULL UNIQUE,
    password TEXT NOT NULL,
    rol TEXT CHECK(rol IN ('admin', 'usuario', 'lider')) DEFAULT 'usuario',
    fecha_creacion DATETIME DEFAULT CURRENT_TIMESTAMP
  );

  CREATE TABLE if NOT EXISTS tasks (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    titulo TEXT NOT NULL,
    descripcion TEXT,
    estado TEXT CHECK(estado IN ('pendiente', 'en progreso', 'completada')) DEFAULT 'pendiente',
    prioridad INTEGER DEFAULT 0,
    fecha_creacion DATETIME DEFAULT CURRENT_TIMESTAMP,
    fecha_limite DATETIME,
    usuario_id INTEGER NOT NULL,
    FOREIGN KEY (usuario_id) REFERENCES users (id) ON DELETE CASCADE
  );
`);

export default db;
