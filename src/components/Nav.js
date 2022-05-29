import React from "react";
import "./Nav.css";
import globe from "../images/globe.png";

const Nav = () => {
    return (
        <nav className="nav">
            <div className="nav__inner">
                <img className="nav__globe" src={globe} alt="Logo" />
                <h1 className="nav__logoText">my travel journal.</h1>
            </div>
        </nav>
    );
};

export default Nav;
