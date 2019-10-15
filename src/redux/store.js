import profileReducer from "./profile-reducer";
import newsReducer from "./news-reducer";
import dialogsReducer from "./dialogs-reducer";
// this just example of redux`s store. This store doesn`t used in project

let store = {
    _state: {
        profilePage: {
            posts: [
                { id: '1', message: 'Hi, how are you?', likesCount: 13 },
                { id: '2', message: '123', likesCount: 19 },
                { id: '2', message: 'dddddddddd', likesCount: 121 },
                { id: '2', message: 'gdsgsdgsgsgs', likesCount: 1245 },
                { id: '2', message: 'IccccxDDDx', likesCount: 9 }
            ],
            newPostText: ''
        },
        dialogsPage: {
            dialogs: [
                { id: '1', name: 'Adriana' },
                { id: '2', name: 'Roberto' },
                { id: '3', name: 'Gabriela' },
                { id: '4', name: 'Gerardo' },
                { id: '5', name: 'Camila' },
                { id: '6', name: 'Silvia' }
            ],
            messages: [
                { id: '1', message: 'hi' },
                { id: '2', message: 'Hoy are you?' },
                { id: '3', message: 'Yo' }
            ],
            newMessageText: ''
        },
        newsPage: {
            news: [
                { id: '1', content: 'This is firs news' },
                { id: '2', content: 'This is second news' },
                { id: '3', content: 'This is third news' },
                { id: '4', content: 'This is fourth news' }
            ],
            newsText: ''
        }
    },
    _callSubscriber() {
        console.log('state chanhed');
    },
    // subscride says UI that state changed
    subscribe(observer) {
        this._callSubscriber = observer;
    },
    getState() {
        return this._state;
    },
    // dispatch 
    dispatch(action) {   // { type: 'ADD-POST' }
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.newsPage = newsReducer(this._state.newsPage, action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);

        this._callSubscriber(this._state);
    }
}

export default store;
window.store = store;

