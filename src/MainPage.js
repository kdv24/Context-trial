import React from 'react';
import Login from './components/Login';
import UserContext from './UserContext';
import UserPage from './components/UserPage';
import { FAKE_USER } from './api';

class MainPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = { currentUser: null };
    }

    handleLogin = user => {
        console.log('logging in: ', FAKE_USER.firstName);
        // this.setState({ currentUser: user });
    };

    handleLogout = () => {
        console.log('logging out: ', FAKE_USER.pet);
        // this.setState({ currentUser: null });
    };

    render() {
        return (
            <UserContext.Provider
                value={{
                    // passed in object, so have to destructure in component to consume
                    currentUser: this.state.currentUser,
                    onLogin: this.handleLogin,
                    onLogout: this.handleLogout,
                }}
            >
                {this.state.currentUser ? <UserPage /> : <Login />}
            </UserContext.Provider>
        );
    }
}

export default MainPage;
