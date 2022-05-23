import React, { useState } from 'react';
import './Header.css'
const Header = () => {
    const [menubar, setMenubar] = useState(false);

    const changeBackground = () => {
        if (window.scrollY >= 80) {
            setMenubar(true)
        }
        else {
            setMenubar(false)
        }
    }
    window.addEventListener('scroll', changeBackground)
    return (
        <nav class={menubar ? "navbar sticky-top headerScroll active navbar-expand-lg":"navbar sticky-top headerScroll navbar-expand-lg navbar-light "}>
            <div class="container">
                <a class="navbar-brand" href="#">Navbar</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNavDropdown">
                    <ul class="navbar-nav ms-auto">
                        <li class="nav-item">
                            <a class={menubar ? "nav-link text-dark":"nav-link  active"} aria-current="page" href="#">Home</a>
                        </li>
                        <li class="nav-item">
                            <a class={menubar ? "nav-link text-dark":"nav-link active"} href="#">Features</a>
                        </li>
                        <li class="nav-item">
                            <a class={menubar ? "nav-link text-dark":"nav-link active"} href="#">Pricing</a>
                        </li>
                        <li class="nav-item dropdown">
                            <a class={menubar ? "nav-link text-dark dropdown-toggle":"nav-link active dropdown-toggle"} href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Dropdown link
                            </a>
                            <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                <li><a class="dropdown-item" href="#">Action</a></li>
                                <li><a class="dropdown-item" href="#">Another action</a></li>
                                <li><a class="dropdown-item" href="#">Something else here</a></li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Header;