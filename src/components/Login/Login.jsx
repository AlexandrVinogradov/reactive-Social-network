import React from 'react';
import { reduxForm, Field } from 'redux-form';
import { Input, createField } from '../common/FormsControls/FormsControls';
import { required } from '../../utils/validators/validators';
import { connect } from 'react-redux';
import { login } from '../../redux/auth-reducer';
import { Redirect } from 'react-router-dom';
import s from './../common/FormsControls/FormsControls.module.css';




const LoginForm = ({ handleSubmit, error, captchaUrl }) => {
    return <form onSubmit={handleSubmit}>
        <div className={s.input}>
        {createField("Email", "email", [required], Input)}
        </div>
        <div className={s.input}>
        {createField("Password", "password", [required], Input, { type: "password" })}
        </div>
        <div className={s.checkbox}>
        {createField(null, "rememberMe", [], Input, { type: "checkbox" }, "remember me")}
        </div>

        {captchaUrl && <img src={captchaUrl} />}
        {captchaUrl && createField('Symbols', "captcha", [required], Input, {}) }

        {error && <div className={s.formSummaryError}>
            {error}
        </div>}
        <div>
            <button>Login</button>
        </div>
    </form>
}
const LoginReduxForm = reduxForm({ form: 'login' })(LoginForm)



const Login = (props) => {
    const onSubmit = (formData) => {
        props.login(formData.email, formData.password, formData.rememberMe, formData.captcha )
    }
    if (props.isAuth) {
        return <Redirect to={"/profile"} />
    }
    return <div>
        <h1>LOGIN</h1>
        <LoginReduxForm onSubmit={onSubmit} captchaUrl={props.captchaUrl} />
    </div>
}
const mapStateToProps = (state) => ({
    captchaUrl: state.auth.captchaUrl,
    isAuth: state.auth.isAuth
})
export default connect(mapStateToProps, { login })(Login);