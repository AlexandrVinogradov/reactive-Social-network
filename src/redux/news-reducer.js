const ADD_NEW = 'ADD-NEW';
const UPDATE_NEW_NEWS_TEXT = 'UPDATE-NEW-NEWS-TEXT';

let initialState = {
    news: [
        { id: '1', content: 'This is firs news' },
        { id: '2', content: 'This is second news' },
        { id: '3', content: 'This is third news' },
        { id: '4', content: 'This is fourth news' }
    ],
    newsText: ''
}


const newsReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_NEW:
            let newText = {
                id: 5,
                content: state.newsText
            };
            state.news.push(newText);
            state.newsText = '';
            return state;
        case UPDATE_NEW_NEWS_TEXT:
            state.newsText = action.newText;
            return state;
        default:
            return state;
    }
}

// action creator
export const addNewActionCreator = () => ({ type: ADD_NEW });
export const updateNewNewsTextActionCreator = (text) =>
    ({ type: UPDATE_NEW_NEWS_TEXT, newText: text });

export default newsReducer;