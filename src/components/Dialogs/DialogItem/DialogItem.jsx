import React from 'react';
import s from './../Dialogs.module.css';
import { NavLink } from 'react-router-dom';

const DialogItem = (props) => {

    let path = '/dialogs/' + props.id;

    return <li className={s.user + ' ' + s.active}>
        <NavLink to={path}>{props.name}</NavLink>
    </li>;
}

export default DialogItem;