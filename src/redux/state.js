// action type 
const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';

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
            newPostText: 'texarea'
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
            newMessageText: 'enter your message'
        }
    },
    _callSubscriber() {
        console.log('state chanhed');
    },

    subscribe(observer) {
        this._callSubscriber = observer;
    },
    // метод для взятия файлов из srore 
    getState() {
        return this._state;
    },

    // Метод из которого можно дергать функции
    dispatch(action) {   // { type: 'ADD-POST' }
        debugger;
        if (action.type === 'ADD-POST') {
            let newPost = {
                id: 5,
                message: this._state.profilePage.newPostText,
                likesCount: 0
            };
            this._state.profilePage.posts.push(newPost);
            this._state.profilePage.newPostText = '';
            this._callSubscriber(this._state);
        } else if (action.type === 'UPDATE-NEW-POST-TEXT') {
            this._state.profilePage.newPostText = action.newText;
            this._callSubscriber(this._state);
        } else if (action.type === 'ADD-MESSAGE') {
            let newMessage = {
                id: 4,
                message: this._state.dialogsPage.newMessageText
            };
            this._state.dialogsPage.messages.push(newMessage);
            this._state.dialogsPage.newMessageText = '';
            this._callSubscriber(this._state);
        } else if (action.type === 'UPDATE-NEW-MESSAGE-TEXT') {
            this._state.dialogsPage.newMessageText = action.newText;
            this._callSubscriber(this._state);
        }
    }

}


// ActionCreator
export const addPostActionCreator = () => ({ type: ADD_POST });
export const updateNewPostTextActionCreator = (text) =>
    ({ type: UPDATE_NEW_POST_TEXT, newText: text });
export const addMessageActionCreator = () => ({ type: ADD_MESSAGE });
export const updateNewMessageTextActionCreator = (text) =>
    ({ type: UPDATE_NEW_MESSAGE_TEXT, newText: text });




export default store;
window.store = store;