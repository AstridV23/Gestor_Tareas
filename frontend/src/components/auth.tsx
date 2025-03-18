import Login from "./login"
import Registro from "./registro"
import { useState } from "react";

export default function Auth() {

    const [authPage, setAuthPage] = useState<"signin" | "signup">("signin");

    const ToggleAuthPage = () => {
        setAuthPage((prevAuthPage) =>
            prevAuthPage === "signin" ? "signup" : "signin"
        );
    }

    return (
        <div className="h-screen flex justify-center items-center bg-gradient-to-br from-blue-500 to-green-300">
            {authPage === "signin" ? (
                <Login toggleAuthPage={ToggleAuthPage} />
            ) : (
                <Registro toggleAuthPage={ToggleAuthPage} />
            )}
        </div>
    )
}
