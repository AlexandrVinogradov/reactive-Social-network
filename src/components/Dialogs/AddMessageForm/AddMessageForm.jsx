import React from 'react';
import { Textarea } from '../../common/FormsControls/FormsControls';
import { required, maxLenghtCreator } from '../../../utils/validators/validators';
import { reduxForm, Field } from 'redux-form';

const maxLength50 = maxLenghtCreator(50);

const AddMessageForm = (props) => {
    return <form onSubmit={props.handleSubmit}>
        <div>
            <Field validate={[required, maxLength50]} placeholder="Enter your message" 
            name="newMessageBody" component={Textarea} />
        </div>
        <div>
            <button>Add message</button>
        </div>
    </form>
}
export default reduxForm({form: 'dialogAddMessageForm'})(AddMessageForm);