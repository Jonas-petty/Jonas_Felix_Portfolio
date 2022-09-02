import React from "react";

export default function Contact() {
    return (
        <section className="contacts" id="contacts">
            <div className="contacts-display">
                <ul className="contacts__list">
                    <li><a href=".about">GitHub</a></li>
                    <li><a href=".">LinkedIn</a></li>
                    <li><a href="#">Email</a></li>
                </ul>
            </div>
            <small className="author">Feito por @Jonas Felix</small>
        </section>
    )
}