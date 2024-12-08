import {React, useContext} from "react";
import "./header.css";
// import avatar from "/imgs/bin/66146554_p8.jpg"

const Header = () => {

    return (<>
        <header>
            <section className="image-block">
                <img src="/imgs/bin/66146554_p8.jpg" alt="profilepic" />
                <h1>Go tables.gg</h1>
            </section>
            <nav>
                <a href="/">Home</a>
                <a href="/Store">Store</a>
                <a href="/About">About</a>
                <a href="/Cart"><img src="/imgs/bin/buy.svg" alt="cart" /></a>
            </nav>
        </header>
    </>)
}

export {Header}