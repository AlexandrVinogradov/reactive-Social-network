import React from 'react';
import { reduxForm, Field } from 'redux-form';
import { Input, createField } from '../common/FormsControls/FormsControls';
import { required } from '../../utils/validators/validators';
import { connect } from 'react-redux';
import { login } from '../../redux/auth-reducer';
import { Redirect } from 'react-router-dom';
import s from './../common/FormsControls/FormsControls.module.css';
import l from './Login.module.css';




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
        {captchaUrl && createField('Symbols', "captcha", [required], Input, {})}

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
        props.login(formData.email, formData.password, formData.rememberMe, formData.captcha)
    }
    if (props.isAuth) {
        return <Redirect to={"/profile"} />
    }
    return <div className={l.loginBlock}>
        <div>
            <h1>LOGIN</h1>
            <LoginReduxForm onSubmit={onSubmit} captchaUrl={props.captchaUrl} />
        </div>
        <div className={l.loginInfo}>
            <p>Hello if you haven`t account you can use:</p>
            <p>Login: <u>free@samuraijs.com</u></p>
            <p>Password: <u>free</u></p>
            <p>my id: 1487 you can use <u>...profile/1487</u></p>
        </div>
    </div>
}
const mapStateToProps = (state) => ({
    captchaUrl: state.auth.captchaUrl,
    isAuth: state.auth.isAuth
})
export default connect(mapStateToProps, { login })(Login);