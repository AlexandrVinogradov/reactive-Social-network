import React from 'react';
import s from './../News.module.scss';
import { NavLink } from 'react-router-dom';

const NewsItem = (props) => {

    return <li className={s.news}>
        {props.content}
    </li>;
}

export default NewsItem;