import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import MessageItem from './MessageItem/MessageItem';
import { reduxForm, Field } from 'redux-form';

const Dialogs = (props) => {

    let state = props.dialogsPage;

    let dialogsElements = state.dialogs.map(d => <DialogItem name={d.name} id={d.id} key={d.id} />);
    let messageElements = state.messages.map(m => <MessageItem message={m.message} key={m.id} />);
    let newMessageText = state.newMessageText;

    let addNewMessage = (values) => {
        props.addMessage(values.newMessageBody);
    }

    return (        
        <div className={s.dialogs}>
            <ul className={s.dialogs_items}>
                {dialogsElements}
            </ul>
            <ul className={s.messages}>
                {messageElements}
            </ul>
            <div>
                <AddMessageFormRedux onSubmit={addNewMessage}/>
            </div>
        </div>
    )
}

const AddMessageForm = (props) => {
    return <form onSubmit={props.handleSubmit}>
        <div>
            <Field placeholder="Enter your message" name="newMessageBody" component="textarea" />
        </div>
        <div>
            <button>Add message</button>
        </div>
    </form>
}

const AddMessageFormRedux = reduxForm({form: 'dialogAddMessageForm'})(AddMessageForm);

export default Dialogs;