import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import MessageItem from './MessageItem/MessageItem';
import AddMessageForm from './AddMessageForm/AddMessageForm';

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
            <div className={s.usersMessage}>
                <ul className={s.dialogs_items}>
                    {dialogsElements}
                </ul>
                <ul className={s.messages}>
                    {messageElements}
                </ul>
            </div>
            <div>
                <AddMessageForm onSubmit={addNewMessage}/>
            </div>
        </div>
    )
}
export default Dialogs;