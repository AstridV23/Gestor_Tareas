import { useState } from "react";
//import axios from "axios";
import { FaEnvelope, FaLock, FaUser } from "react-icons/fa";

const styles = {
    icon: "absolute left-6 top-1/2 transform -translate-y-1/2 text-gray-600",
    input: "w-[90%] bg-gray-200 p-2 outline-none rounded-sm placeholder-gray-400 text-sm my-3 pl-8",
    inputContainer: "flex justify-center relative"
}

type signupProp = {
    toggleAuthPage: () => void;
}

export default function Registro({ toggleAuthPage }: signupProp) {

    const [credentials, setCredentials] = useState({
        name: '',
        email: '',
        password: ''
    });

    // maneja el cambio de texto en los inputs
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        // copia los bloques de texto
        setCredentials({
            ...credentials,
            [e.target.name]: e.target.value
        });
    }

    // Aquí se enviarían las credenciales a un servidor para autenticar al usuario
    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        //axios.post('http://localhost:3000/api/login', credentials);
        console.log(credentials);
    }

    return (

        <div className="bg-amber-50 max-w-sm w-[%90] p-8 rounded-lg shadow-lg">
            <div className="my-4 text-center">
                <h1 className="text-2xl font-bold text-blue-500">Registro</h1>
                <div className="w-[10%] mx-auto h-1 rounded-b-full bg-blue-500 my-2"></div>
            </div>

            <form onSubmit={handleSubmit}>

                <div className={styles.inputContainer}>
                    <FaUser className={styles.icon} />
                    <input type="text" placeholder="text" onChange={handleChange} className={styles.input} />
                </div>

                <div className={styles.inputContainer}>
                    <FaEnvelope className={styles.icon} />
                    <input type="email" placeholder="email" onChange={handleChange} className={styles.input} />
                </div>

                <div className={styles.inputContainer}>
                    <FaLock className={styles.icon} />
                    <input type="password" placeholder="password" onChange={handleChange} className={styles.input} />
                </div>

                <button className="bg-blue-400 my-2 py-2 px-10 rounded-full text-white text-bold cursor-pointer">
                    Crear Cuenta
                </button>

                <div className="my-4 flex justify-center text-sm">
                    <p>😎🔥Ya tienes una cuenta?</p>
                    <p onClick={() => toggleAuthPage()} className="ml-1 text-blue-500 cursor-pointer">Inicia Sesión</p>
                </div>

                <div className="flex justify-center gap-3 my-6">
                    <div
                        onClick={() => toggleAuthPage()}
                        className="bg-gray-200 py-2 px-10 rounded-full text-gray-600 text-bold cursor-pointer"
                    >
                        <span>Registro</span>
                    </div>
                    <div
                        onClick={() => toggleAuthPage()}
                        className="bg-green-300 py-2 px-10 rounded-full text-white  text-bold cursor-pointer"
                    >
                        <span>Login</span>
                    </div>
                </div>

            </form>

        </div>

    )
}
