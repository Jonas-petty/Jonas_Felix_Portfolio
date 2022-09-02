import React from "react";
import "../style.css"

export default function Header() {
    return (
        <header>
            <nav className="navbar">
                <h1 className="navbar__title">Jonas Felix</h1>
                <ul className="navbar__list">
                    <li><a href="#about">Sobre</a></li>
                    <li><a href="#projects">Projetos</a></li>
                    <li><a href="#contacts">Contato</a></li>
                </ul>
            </nav>
        </header>
    )
}