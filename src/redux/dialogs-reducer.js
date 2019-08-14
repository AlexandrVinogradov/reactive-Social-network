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
    // делаем копию стейта, чтобы connect перерисовывал изменения
    // так как в объекте есть еще объекты их надо тоже скопировать 
    // dialogs меняться не будет, поэтому его не копируем

    switch (action.type) {
        case UPDATE_NEW_MESSAGE_TEXT:
            return {
                ...state,
                newMessageText: action.newText
            };
        case ADD_MESSAGE:
            let newMessage = state.newMessageText;
            return {
                ...state,
                newMessageText: '',
                messages: [...state.messages, { id: 4, message: newMessage }],
            };
        default:
            return state;
    }
}

// action creator
export const addMessageActionCreator = () => ({ type: ADD_MESSAGE });
export const updateNewMessageTextActionCreator = (text) =>
    ({ type: UPDATE_NEW_MESSAGE_TEXT, newText: text });

export default dialogsReducer;