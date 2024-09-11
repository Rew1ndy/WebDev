import React from "react";
import "./header.css";
import avatar from "./66146554_p8.jpg"

const Header = () => {
    return (<>
        <header>
            <section className="image-block">
                <img src={avatar} alt="profilepic" />
            </section>
            <nav>
                <a href="/">Home</a>
                <a href="/About">About</a>
                <a href="/Random">Random</a>
            </nav>
        </header>
    </>)
}

export {Header}