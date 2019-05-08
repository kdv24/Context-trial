import React from 'react';
import UserContext from '../UserContext';

const Login = ({ onLogin }) => (
    <div className="login">
        <p>Login here</p>
        <form>
            <label htmlFor="name">
                Name:
                <input type="text" />
            </label>
            <UserContext.Consumer>
                {({ onLogin }) => <button onClick={onLogin}>Sign In</button>}
            </UserContext.Consumer>
        </form>
    </div>
);

export default Login;
