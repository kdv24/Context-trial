import React, { useState } from 'react';
import UserContext from '../UserContext';

const Form = () => {
    const [username, setUsername] = useState(null);
    console.log('currentUser is: ', username);
    return (
        <form type="submit">
            <label htmlFor="name">
                Name:
                <input
                    className="input-fields"
                    type="text"
                    onChange={e => setUsername(e.target.value)}
                />
            </label>
            <label htmlFor="password">
                Password:
                <input
                    className="input-fields"
                    type="text"
                    onChange={e => setUsername(e.target.value)}
                />
            </label>
        </form>
    );
};

const Login = ({ onLogin }) => (
    <div className="login">
        <p>Login to see your Messages and To Do list</p>
        <Form />
        <UserContext.Consumer>
            {({ onLogin }) => (
                <button
                    onClick={onLogin}
                    style={{
                        backgroundColor: 'lightgray',
                        borderRadius: '5px',
                        width: '150px',
                        display: 'flex',
                        justifyContent: 'space-around',
                        alignSelf: 'center',
                        margin: '25px',
                        padding: '12px',
                    }}
                >
                    Sign In
                </button>
            )}
        </UserContext.Consumer>
    </div>
);

export default Login;
