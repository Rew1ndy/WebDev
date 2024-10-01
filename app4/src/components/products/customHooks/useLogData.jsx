import { useState, useEffect } from "react";

// Хук для виведення даних зі стану в консоль
function useLogData(data) {
    useEffect(() => {
        console.log("Data: ", data);
    }, [data]);
}

export { useLogData }