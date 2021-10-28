import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import './AppHeader.css';
import icon from '../img/icon.png';

export default function AppHeader({authenticated, onLogout}) {
    return (
        <header className="app-header">
            <div className="container">
                <div className="app-branding">
                    <Link to="/" className="app-title"><img src={icon} width='110'></img></Link>
                </div>
                <input className="search"></input>
                <div className="app-options">
                    <nav className="app-nav">
                        { authenticated ? (
                            <ul>
                                <li>
                                    <NavLink to='/location'>위치설정</NavLink>
                                </li>
                                |
                                <li>
                                    <NavLink to='/write'>판매글쓰기</NavLink>
                                </li>
                                |
                                <li>
                                    <NavLink to ='/boards'>글조회</NavLink>
                                </li>
                                |
                                <li>
                                    <NavLink to='/profile'>마이페이지</NavLink>
                                </li>
                                |
                                <li>
                                    <a href='#!' onClick={onLogout}>로그아웃</a>
                                </li>
                            </ul>
                        ): (
                            <ul>

                                <li>
                                    <NavLink to='/login'>로그인</NavLink>
                                </li>
                                |
                                <li>
                                    <NavLink to='/signup'>회원가입</NavLink>
                                </li>
                            </ul>
                        )}
                    </nav>
                </div>
            </div>
        </header>
    )
}