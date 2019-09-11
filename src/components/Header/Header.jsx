import React from 'react';
import s from './Header.module.css';
import { NavLink } from 'react-router-dom';


const Header = (props) => {
    return <header className={s.header}>
        <img src="https://cdn2.iconfinder.com/data/icons/playstation-controller-buttons-3/64/playstation-flat-icon-triangle-dark-128.png" />

        <div className={s.loginBlock}>
            {props.isAuth 
                ? <div>{props.login} - <button onClick={props.logout}>Logout</button></div>
                : <NavLink to={"/login"}>Login</NavLink>}
        </div>
    </header>
}

export default Header;