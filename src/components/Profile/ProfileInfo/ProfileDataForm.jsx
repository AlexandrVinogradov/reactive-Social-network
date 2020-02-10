import React from 'react';
import s from './ProfileInfo.module.scss';
import sForm from '../../common/FormsControls/FormsControls.module.scss';
import { reduxForm } from 'redux-form';
import {
  createField,
  Input,
  Textarea
} from '../../common/FormsControls/FormsControls';

const ProfileDataForm = ({ handleSubmit, profile, error }) => {
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <button className={s.btnSave}>Save</button>
      </div>

      {error && <div className={sForm.formSummaryError}>{error}</div>}

      <ul>
        <li>
          <b>Full name</b>: {createField('Full name', 'fullName', [], Input)}
        </li>
        <li>
          <b>About me</b>: {createField('About me', 'aboutMe', [], Textarea)}
        </li>
        <li>
          <b>Looking for a job</b>:{' '}
          {createField('', 'lookingForAJob', [], Input, { type: 'checkbox' })}
        </li>
        <li>
          <b>My professionals skills</b>:{' '}
          <div className={s.field}>
            {createField(
              'My skills',
              'lookingForAJobDescription',
              [],
              Textarea
            )}
          </div>
        </li>
        <li>
          <b>Contacts</b>:{' '}
          {Object.keys(profile.contacts).map(key => {
            return (
              <div key={key} className={s.contact}>
                <b>
                  {key}: {createField(key, 'contacts.' + key, [], Input)}
                </b>
              </div>
            );
          })}
        </li>
      </ul>
    </form>
  );
};
const ProfileDataFormReduxForm = reduxForm({ form: 'edit-profile' })(
  ProfileDataForm
);
export default ProfileDataFormReduxForm;
