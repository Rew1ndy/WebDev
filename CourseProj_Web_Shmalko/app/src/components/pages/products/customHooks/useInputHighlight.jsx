import { useEffect } from "react";

function useInputHighlight(ref) {
    useEffect(() => {
        if (ref.current) {
            ref.current.style.transition = "background-color 0.3s ease";
            const handleFocus = () => {
                ref.current.style.backgroundColor = "#ffffe0"; // Светло-желтый цвет при фокусе
            };
            const handleBlur = () => {
                ref.current.style.backgroundColor = ""; // Возврат к стандартному цвету при потере фокуса
            };

            ref.current.addEventListener("focus", handleFocus);
            ref.current.addEventListener("blur", handleBlur);

            return () => {
                ref.current.removeEventListener("focus", handleFocus);
                ref.current.removeEventListener("blur", handleBlur);
            };
        }
    }, [ref]);
}

export { useInputHighlight }