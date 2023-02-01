import React from 'react';
import style from './Navbar.module.css'

export const Navbar = () => {
    return (
        <div className={style.navbar}>
            <a href="">HOME</a>
            <a href="">ABOUT</a>
            <a href="">SKILLS</a>
            <a href="">PORTFOLIO</a>
            <a href="">CONTACT</a>
        </div>
    );
};

