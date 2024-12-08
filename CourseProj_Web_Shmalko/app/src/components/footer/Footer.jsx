import React from "react";
import "./footer.css";


function Footer() {
    return (
        <footer>
            <div className="footer-wrapper">
                <section className="links">
                    <a href="https://www.youtube.com">Youtube</a>
                    <a href="https://www.instagram.com">Instagram</a>
                    <a href="https://www.twitter.com">X</a>
                </section>
                <section className="about">
                    <h4>Company by Rew1nd.</h4>
                    <p>Do with this info what you want, still I dont care.</p>
                    <p>2024. Aaand... noting good.</p>
                </section>
                <section className="email">
                    <input type="text" typeof="email" placeholder="Go and try."/>
                    <button type="button">Submit</button>
                </section>
            </div>
        </footer>
    );
}

export default Footer;