import React from 'react';
import { addMessageActionCreator } from '../../redux/dialogs-reducer';
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
        addMessage: (newMessageBody) => {
            dispatch(addMessageActionCreator(newMessageBody));
        }
    }
}


// compose берет Dialog, закидывает его в withAuthRedirect, далее результат закидывает в connect
export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    withAuthRedirect // это hoc
)(Dialogs);