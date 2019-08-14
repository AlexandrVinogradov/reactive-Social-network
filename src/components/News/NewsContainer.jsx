import React from 'react';
import { addNewActionCreator, updateNewNewsTextActionCreator } from '../../redux/news-reducer';
import News from './News';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
    return {
        newsPage: state.newsPage
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        updateNewNewsText: (text) => {
            let action = updateNewNewsTextActionCreator(text);
            dispatch(action);
        },
        onSendNewsClick: () => {
            dispatch(addNewActionCreator());
        }
    }
}
const NewsContaine = connect(mapStateToProps, mapDispatchToProps)(News);

export default NewsContaine;

