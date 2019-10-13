import React from 'react';
import s from './Navbar.module.css';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    return <nav className={s.nav}>
        <ul className={s.ul}>



            <li className={s.item}>
                <NavLink to="/profile" activeClassName={s.active} className={s.a}>
                    <i class="fa fa-home" aria-hidden="true"></i>
                    <div className={s.name} data-text={s.home} >
                        Profile
                    </div>
                </NavLink></li>
            <li className={s.item}>
                <NavLink to="/dialogs" activeClassName={s.active} className={s.a}>
                    <i class="fa fa-comments-o" aria-hidden="true"></i>
                    <div className={s.name} data-text={s.home} >
                        Message
                    </div>
                </NavLink></li>
            <li className={s.item}>
                <NavLink to="/news" activeClassName={s.active} className={s.a}>
                    <i class="fa fa-globe" aria-hidden="true"></i>  
                    <div className={s.name} data-text={s.home} >
                    News
                    </div>
                </NavLink></li>
            <li className={s.item}>
                <NavLink to="/music" activeClassName={s.active} className={s.a}>
                    <i class="fa fa-play" aria-hidden="true"></i>
                    <div className={s.name} data-text={s.home} >
                    Music
                    </div>
                </NavLink></li>
            <li className={s.item}>
                <NavLink to="/settings" activeClassName={s.active} className={s.a}>
                    <i class="fa fa-sliders" aria-hidden="true"></i>
                    <div className={s.name} data-text={s.home} >
                    Settings
                    </div>
                </NavLink></li>
            <li className={s.item}>
                <NavLink to="/users" activeClassName={s.active} className={s.a}>
                    <i class="fa fa-user-plus" aria-hidden="true"></i>
                    <div className={s.name} data-text={s.home} >
                    Users
                    </div>
                </NavLink></li>
        </ul>
    </nav>;
}
export default Navbar;