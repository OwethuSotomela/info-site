import React from "react";
import ReactLogo from "../images/react-logo1.png";

export default function Header() {
    return (
        <header>
            <nav className="navbar">
                <img src={ReactLogo} alt="" className="nav-logo" />
                <ul className="nav-items">
                    <li>Project 1</li>
                    <li>Project 2</li>
                    <li>Project 3</li>
                </ul>
            </nav>
        </header>
    )
}