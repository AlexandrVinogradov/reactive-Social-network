import React from 'react';
import s from './Navbar.module.css';

const Navbar = () => {
    return <nav className={s.nav}>
        <ul className={s.ul}>
            <li><a href="/profile" className={s.item}>Profile</a></li>
            <li><a href="/dialogs" className={s.item}>Message</a></li>
            <li><a href="/news" className={s.item}>News</a></li>
            <li><a href="/music" className={s.item}>Music</a></li>
            <li><a href="/settings" className={s.item}>Settings</a></li>
        </ul>
    </nav>;
}

export default Navbar;