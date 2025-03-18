// aquí irá la animacion de confeti cuando un nuevo usuario se registre
import Confetti from "react-confetti";
import { useWindowSize } from "react-use";

export default function Confeti() {
    const { width, height } = useWindowSize();

    return (
        <Confetti
            width={width-3}
            height={height}
            tweenDuration = {1000}
        />
    );
};