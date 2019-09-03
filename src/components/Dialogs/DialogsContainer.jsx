import React from 'react';
import { updateNewMessageTextActionCreator, addMessageActionCreator } from '../../redux/dialogs-reducer';
import Dialogs from './Dialogs';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';
import { compose } from "redux";



const mapStateToProps = (state) => {
    return {
        dialogsPage: state.dialogsPage
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        updateNewMessageText: (text) => {
            let action = updateNewMessageTextActionCreator(text);
            dispatch(action);
        },
        addMessage: () => {
            dispatch(addMessageActionCreator());
        }
    }
}


// compose берет Dialog, закидывает его в withAuthRedirect, далее результат закидывает в connect
export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    withAuthRedirect // это hoc
)(Dialogs);