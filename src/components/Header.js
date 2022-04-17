import React from "react";
import ReactLogo from "../images/react-logo2.png";

export default function Header() {
    return (
        <header>
            <nav className="navbar">
                <img src={ReactLogo} alt="" className="nav-logo" />
                <h3 className="nav--h3">ReactFacts</h3>
                <h4 className="nav--h4">React Project 1</h4>
            </nav>
        </header>
    )
}