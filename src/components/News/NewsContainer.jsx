import React from 'react';
import { addNewActionCreator, updateNewNewsTextActionCreator } from '../../redux/news-reducer';
import News from './News';

const NewsContaine = (props) => {

    let state = props.store.getState().newsPage;

    let onSendNewsClick = () => {
        props.store.dispatch(addNewActionCreator());
    }
    let onAddNews = (text) => {
        props.store.dispatch(updateNewNewsTextActionCreator(text));

    }

    return <News updateNewNewsText={onAddNews} onSendNewsClick={onSendNewsClick}
        newsPage={state} />
}

export default NewsContaine;

