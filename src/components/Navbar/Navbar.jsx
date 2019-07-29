import React from 'react';
import s from './Navbar.module.css';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    return <nav className={s.nav}>
        <ul className={s.ul}>
            <li className={s.item}><NavLink to="/profile" activeClassName={s.active}>Profile</NavLink></li>
            <li className={s.item}><NavLink to="/dialogs" activeClassName={s.active} >Message</NavLink></li>
            <li className={s.item}><NavLink to="/news" activeClassName={s.active} >News</NavLink></li>
            <li className={s.item}><NavLink to="/music" activeClassName={s.active} >Music</NavLink></li>
            <li className={s.item}><NavLink to="/settings" activeClassName={s.active} >Settings</NavLink></li>

            <div>
                <div>
                <li className={s.item + ' ' + s.friends}><NavLink to="/friends" activeClassName={s.active} >Friends</NavLink></li>
                </div>
                <ul>
                    <li><img className={s.avatar} src="https://cs9.pikabu.ru/post_img/big/2017/01/06/0/1483652153163869473.jpg" />Adriana</li>
                    <li><img className={s.avatar} src="https://pp.userapi.com/c855416/v855416570/9f462/9NJrz3aIiZQ.jpg" />Roberto</li>
                    <li><img className={s.avatar} src="https://ru1.anyfad.com/items/t1@39b8c2ad-babb-4e7d-a605-ef103a97049d/Chikano-Art.jpg" />Gabriela</li>
                </ul>
            </div>

        </ul>
    </nav>;
}

export default Navbar;