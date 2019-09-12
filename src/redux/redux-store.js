import { createStore, combineReducers, applyMiddleware } from "redux";
import profileReducer from "./profile-reducer"
import newsReducer from "./news-reducer"
import dialogsReducer from "./dialogs-reducer"
import usersReducer from "./users-reduser";
import authReducer from "./auth-reducer";
import thunkMiddleware from "redux-thunk";
import { reducer as formReducer } from 'redux-form';
import appReducer from "./app-reducer";

// закомбаинили(создали) редюсеры
// за каждую ветку отвечает свой редюсер 
let reducers = combineReducers({
    profilePage: profileReducer,
    newsPage: newsReducer,
    dialogsPage: dialogsReducer,
    usersPage: usersReducer,
    auth: authReducer,
    form: formReducer,
    app: appReducer
});


// создали store с помощью функции, которая пришла из redux библиотеки
let store = createStore(reducers, applyMiddleware(thunkMiddleware)); //applyMiddleware 66 11:00, 
                                                     // чтобы был промежуточный слой, 
                                                    //который умеет обраатыватьь функции

window.store = store;

export default store;



// в установленном redux(е) уже есть:
// subscribe(), getState(), dispatch(action)
// но нет логики, которую мы прописали в reduser(ы)