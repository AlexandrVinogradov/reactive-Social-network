const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';

// initialState - одноразовый объект, если state не придет в state - ты встанешь тудва вместо него 
let initialState = {
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
}

const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_MESSAGE:
            let newMessage = {
                id: 4,
                message: state.newMessageText
            };
            state.messages.push(newMessage);
            state.newMessageText = '';
            return state;
        case UPDATE_NEW_MESSAGE_TEXT:
            state.newMessageText = action.newText;
            return state;
        default:
            return state;
    }
}

// action creator
export const addMessageActionCreator = () => ({ type: ADD_MESSAGE });
export const updateNewMessageTextActionCreator = (text) =>
    ({ type: UPDATE_NEW_MESSAGE_TEXT, newText: text });

export default dialogsReducer;