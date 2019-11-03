const ADD_MESSAGE = 'react-network/dialogs/ADD-MESSAGE';

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
    ]
}
const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_MESSAGE:
            let newMessage = action.newMessageBody;
            return {
                ...state,
                messages: [...state.messages, { id: 4, message: newMessage }],
            };
        default:
            return state;
    }
}

export const addMessageActionCreator = (newMessageBody) => ({ type: ADD_MESSAGE, newMessageBody });

export default dialogsReducer;