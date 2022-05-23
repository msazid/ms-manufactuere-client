import { signOut } from 'firebase/auth';
import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../Firebase/Firebase.init';
import './Header.css'
const Header = () => {
    const [user] = useAuthState(auth)
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
    const handleSignOut = () =>{
        signOut(auth);
    }
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
                            <Link to='/' class={menubar ? "nav-link text-dark":"nav-link  active"} aria-current="page" href="#">Home</Link>
                        </li>
                      {
                          user ? (
                            <li class="nav-item dropdown">
                            <a class={menubar ? "nav-link text-dark dropdown-toggle":"nav-link active dropdown-toggle"} href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Profile
                            </a>
                            <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                <li><p class="dropdown-item">Display Name</p></li>
                                <li><button class="dropdown-item" onClick={handleSignOut} href="#">Sign Out</button></li>
                            </ul>
                        </li>
                          ):(
                        <li class="nav-item">
                            <Link to='/login' class={menubar ? "nav-link text-dark":"nav-link  active"} aria-current="page" href="#">Login</Link>
                        </li>
                          )
                      }
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Header;