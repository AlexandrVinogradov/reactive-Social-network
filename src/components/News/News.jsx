import React from 'react';
import s from './News.module.css';
import NewsItem from './NewsItem/NewsItem';

const News = (props) => {

    let state = props.newsPage;

    let newsElements = state.news.map(n => <NewsItem content={n.content} id={n.id} />);
    let newsText = state.newsText;

    // let onSendNewsClick = () => {
    //     props.onSendNewsClick();
    // }
    let onAddNews = (e) => {
        let text = e.target.value;
        props.updateNewNewsText(text);
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
                        placeholder={'Enter your news'} />
                </div>
                <button onClick={() => {props.onSendNewsClick()}}>Send News</button>
                <div>

                </div>
            </div>
        </div>
    )
}

export default News;

