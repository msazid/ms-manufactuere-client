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
    const handleSignOut = () => {
        signOut(auth);
        localStorage.removeItem('accessToken');
    }
    return (
        <nav className = { menubar? "navbar sticky-top headerScroll active navbar-expand-lg": "navbar sticky-top headerScroll navbar-expand-lg navbar-light" }>
            < div className = "container" >
                <div style={{fontFamily:'playfair display',fontSize:'20px',fontStyle:'italic'}}>
                   MS Manufacture
                </div>
                <button className="navbar-toggler" style={{border:'1px solid'}} type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavDropdown">
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item">
                            <Link to='/'className={menubar ? "nav-link text-dark" : "nav-link  active"} aria-current="page" href="#">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link to='/showAllItems'className={menubar ? "nav-link text-dark" : "nav-link  active"} aria-current="page" href="#">All Items</Link>
                        </li>
                        <li className="nav-item">
                            <Link to='/blogs'className={menubar ? "nav-link text-dark" : "nav-link  active"} aria-current="page" href="#">Blogs</Link>
                        </li>
                        {
                            user ? (
                                <li className="nav-item dropdown">
                                    <a className={menubar ? "nav-link text-dark dropdown-toggle" : "nav-link active dropdown-toggle"} href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        Profile
                                    </a>
                                    <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                        <li><Link className="dropdown-item" to='/dashboard'>Dashboard</Link></li>
                                        <li><button className="dropdown-item" onClick={handleSignOut} href="#">Sign Out</button></li>
                                    </ul>
                                </li>
                            ) : (
                                <li className="nav-item">
                                    <Link to='/login'className={menubar ? "nav-link text-dark" : "nav-link  active"} aria-current="page" href="#">Login</Link>
                                </li>
                            )
                        }
                    </ul>
                </div >
            </div >
        </nav >
    );
};

export default Header;