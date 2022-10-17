import React, { useState } from "react";
import "../assets/navbar.css";

const Navbar = () => {
    const [clicked, setClicked] = useState(false);

    console.log(clicked);

    return (
        <>
            <nav>
                <a href="/">
                    <img src="/logo.svg" alt="" />
                </a>
                <div>
                    <ul id="navbar" className={clicked ? "active" : "#navbar"}>
                        <li>
                            <a className="active" href="/">
                                Home
                            </a>
                        </li>
                        <li>
                            <a href="/form">Form</a>
                        </li>
                        <li>
                            <a href="/search">Search</a>
                        </li>
                        <li>
                            <a href="/about">About</a>
                        </li>
                        <li>
                            <a href="/contact">Contact</a>
                        </li>
                    </ul>
                </div>
                <div id="mobile">
                    <i
                        id="bar"
                        className={clicked ? "fas fa-times" : "fas fa-bars"}
                        onClick={(ev) => setClicked(!clicked)}
                    ></i>
                </div>
            </nav>
        </>
    );
};

export default Navbar;
