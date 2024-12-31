import Database from "better-sqlite3";

// crea la base de datos, si no existe
const db = new Database("database.db");

// crea las tablas
db.exec(`
  CREATE TABLE IF NOT EXISTS users (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    nombre TEXT NOT NULL,
    email TEXT NOT NULL UNIQUE,
    password TEXT NOT NULL,
    fecha_creacion DATETIME DEFAULT CURRENT_TIMESTAMP
  );

  CREATE TABLE if NOT EXISTS tasks (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    titulo TEXT NOT NULL,
    descripcion TEXT,
    estado TEXT CHECK(estado IN ('pendiente', 'en progreso', 'completada')) DEFAULT 'pendiente',
    fecha_creacion DATETIME DEFAULT CURRENT_TIMESTAMP,
    fecha_limite DATETIME,
    usuario_id INTEGER NOT NULL,
    FOREIGN KEY (usuario_id) REFERENCES users (id) ON DELETE CASCADE
  );
`);

export default db;
