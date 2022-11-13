import React from "react";
import { SlHome } from "react-icons/sl"

export default function Navbar() {
    return (
        <nav className="nav-info">
            <ul className="nav-items">
                <li>
                    <SlHome/>
                    <a
                    href="#home">Home</a>
                </li>
                <li>
                    <a
                    href="#about">About Me</a>
                </li>
                <li>
                    <a
                    href="#portfolio">Portfolio</a>
                </li>
                <li>
                    <a
                    href="#resume">Resume</a>
                </li>
                <li>
                    <a
                    href="#contact">Contact</a>
                </li>
            </ul>
        </nav>
    )
}