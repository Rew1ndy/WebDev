import React from "react";
import { useRouteError } from "react-router-dom";

const ErrorPage = () => {
    const error = useRouteError();
    console.error(error);

    return (<>
        <section className="ErrorPage" style={{padding: "1.5rem"}}>
            <h1>Oops!</h1>
            <p>Sorry, an unexpected error has occurred. YES.</p>
            <p>
                <i>{error.statusText || error.message}</i>
            </p>
        </section>
    </>)
}

export {ErrorPage}