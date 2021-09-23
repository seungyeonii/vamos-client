import React, {useState} from 'react';
import './Login.css';
import {GOOGLE_AUTH_URL, FACEBOOK_AUTH_URL, GITHUB_AUTH_URL} from '../../constants';
import {getCurrentUser, login} from '../../util/APIUtils';
import {Link, Redirect} from 'react-router-dom'
import fbLogo from '../../img/fb-logo.png';
import googleLogo from '../../img/google-logo.png';
import githubLogo from '../../img/github-logo.png';

export default function Login(props) {
    if (props.authenticated) {
        return <Redirect to={
            {
                pathname: "/",
                state: {
                    from: props.location
                }
            }
        }/>
    }

    return (
        <div className="login-container">
            <div className="login-content">
                <h1 className="login-title">Login to Vamos</h1>
                <SocialLogin/>
                <div className="or-separator">
                    <span className="or-text">OR</span>
                </div>
                <LoginForm setAfterLogin={props.setAfterLogin} {...props}/>
                <span className="signup-link">New user? <Link to="/signup">Sign up!</Link></span>
            </div>
        </div>
    )
}

function LoginForm(props) {
    const [inputs, setInputs] = useState({
        email: '',
        password: '',
    });

    const {email, password} = inputs;

    const handleInput = (event) => {
        const {name, value} = event.target;

        setInputs({
            ...inputs,
            [name]: value,
        });
    }

    const handleSubmit = (event) => {
        event.preventDefault();

        const loginRequest = Object.assign({}, {email, password});
        login(loginRequest)
            .then(() => {
                getCurrentUser()
                    .then(response => {
                        props.setAfterLogin(response, true);
                    })
                    .then(props.history.push("/"))
                    .catch(response => alert(response.error.message));
            })
    }

    return (
        <form onSubmit={handleSubmit}>
            <div className="form-item">
                <input type="email" name="email"
                       className="form-control" placeholder="Email"
                       value={email} onChange={handleInput} required
                />
            </div>
            <div className="form-item">
                <input type="password" name="password"
                       className="form-control" placeholder="Password"
                       value={password} onChange={handleInput} required
                />
            </div>
            <div className="form-item">
                <button type="submit" className="btn btn-block btn-primary">Login</button>
            </div>
        </form>
    )
}

function SocialLogin() {
    return (
        <div className="social-login">
            <a className="btn btn-block social-btn google" href={GOOGLE_AUTH_URL}>
                <img src={googleLogo} alt="Google"/> Log in with Google</a>
            <a className="btn btn-block social-btn facebook" href={FACEBOOK_AUTH_URL}>
                <img src={fbLogo} alt="Facebook"/> Log in with Facebook</a>
            <a className="btn btn-block social-btn github" href={GITHUB_AUTH_URL}>
                <img src={githubLogo} alt="Github"/> Log in with Github</a>
        </div>
    );
}