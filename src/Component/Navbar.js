import React from 'react'
import logo from "../img/logo.png"

const Navbar = () => {
    return (
        <>
            <header class="p-2 text-bg-dark">
                <div class="container">
                    <div class="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
                        <a href="/" class="d-flex align-items-center mb-2 mb-lg-0 text-white text-decoration-none">
                            <img src={logo} alt="logo" height="25" />
                        </a>
                        <ul class="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
                            <li><a href="/" class="nav-link px-3 text-white">DooZen</a></li>
                            <li><a href="/about" class="nav-link px-2 text-white">About</a></li>
                        </ul>
                    </div>
                </div>
            </header>
        </>
    )
}

export default Navbar
