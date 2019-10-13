import React from 'react';
import s from './Header.module.css';
import { NavLink } from 'react-router-dom';


const Header = (props) => {
    return <header className={s.header}>
        <div className={s.container}>
        <NavLink to={'/'}>
            <img src="https://img.icons8.com/ios/2x/react-native.png" />
        </NavLink>


        <div className={s.loginBlock}>
            {props.isAuth 
                ? <div>{props.login}  <button onClick={props.logout} className={s.exitBtn}>exit</button></div>
                : <NavLink to={"/login"}>Login</NavLink>}
        </div>
        </div>
    </header>
}
export default Header;