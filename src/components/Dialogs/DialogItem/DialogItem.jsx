import React from 'react';
import s from './../Dialogs.module.scss';
import { NavLink } from 'react-router-dom';

const DialogItem = (props) => {

    let path = '/dialogs/' + props.id;

    return <li className={s.user} activeClassName={s.active}>
        <NavLink to={path}>{props.name}</NavLink>
    </li>;
}

export default DialogItem;