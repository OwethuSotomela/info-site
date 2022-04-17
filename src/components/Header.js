import React from "react";
import ReactLogo from "../images/react-logo2.png";

export default function Header() {
    return (
        <header>
            <nav className="navbar">
                <img src={ReactLogo} alt="" className="nav-logo" />
                <h3 className="nav--h3">ReactFacts</h3>
                <h4 className="nav--h4">React Project 1</h4>
                {/* <ul className="nav-items">
                    <li>Project 1</li>
                    <li>Project 2</li>
                    <li>Project 3</li>
                </ul> */}
            </nav>
        </header>
    )
}