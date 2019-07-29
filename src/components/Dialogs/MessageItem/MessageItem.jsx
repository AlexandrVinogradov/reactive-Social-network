import React from 'react';
import s from './../Dialogs.module.css';

const MessageItem = (props) => {
    return <li className={s.message}>{props.message}</li>
}

export default MessageItem;