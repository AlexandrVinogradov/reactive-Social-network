import React from 'react';
import s from './News.module.css';
import NewsItem from './NewsItem/NewsItem';
import { addNewActionCreator, updateNewNewsTextActionCreator } from '../../redux/news-reducer';



const News = (props) => {

    let state = props.store.getState().newsPage;

    let newsElements = state.news.map(n => <NewsItem content={n.content} id={n.id} />);
    let newsText = state.newsText;

    let onSendNewsClick = () => {
        props.dispatch(addNewActionCreator());
    }
    let onAddNews = (e) => {
        let text = e.target.value;
        props.dispatch(updateNewNewsTextActionCreator(text));

    }

    return (
        <div>
            News
            <div>
                <div>
                    {newsElements}
                </div>
                <div>
                    <textarea onChange={onAddNews}
                        value={newsText}
                        placeholder={'Enter your news'}></textarea>
                </div>
                <button onClick={onSendNewsClick}>Send News</button>
                <div>

                </div>
            </div>
        </div>
    )
}

export default News;

