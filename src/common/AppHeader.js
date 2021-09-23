import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import './AppHeader.css';

export default function AppHeader({authenticated, onLogout}) {
    return (
        <header className="app-header">
            <div className="container">
                <div className="app-branding">
                    <Link to="/" className="app-title">Vamos</Link>
                </div>
                <div className="app-options">
                    <nav className="app-nav">
                        { authenticated ? (
                            <ul>
                                <li>
                                    <NavLink to='/profile'>Profile</NavLink>
                                </li>
                                <li>
                                    <a href='#!' onClick={onLogout}>Logout</a>
                                </li>
                            </ul>
                        ): (
                            <ul>
                                <li>
                                    <NavLink to='/login'>Login</NavLink>
                                </li>
                                <li>
                                    <NavLink to='/signup'>Signup</NavLink>
                                </li>
                            </ul>
                        )}
                    </nav>
                </div>
            </div>
        </header>
    )
}