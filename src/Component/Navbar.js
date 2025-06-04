import React from "react";
import logo from "../img/logo.png";

const Navbar = () => {
    return (
        <header className="p-2 bg-dark text-white sticky-top">
            <div className="container">
                <nav className="navbar navbar-expand-lg navbar-dark">
                    <a className="navbar-brand d-flex align-items-center" href="/">
                        <img src={logo} alt="logo" height="30" className="me-2" />
                        DooZen
                    </a>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarContent"
                        aria-controls="navbarContent"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon" />
                    </button>

                    <div className="collapse navbar-collapse" id="navbarContent">
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a href="/" className="nav-link text-white px-3">
                                    Home
                                </a>
                            </li>
                            <li className="nav-item">
                                <a href="/about" className="nav-link text-white px-3">
                                    About
                                </a>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        </header>
    );
};

export default Navbar;
