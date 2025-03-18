export { default } from "next-auth/middleware"

// Se agregan las rutas que se quieren proteger Ej: ,"otraruta" dentro de []
export const config = { matcher: ["/panel", "/profile"] }
