import React from 'react';
import Login from './components/Login';
import UserContext from './UserContext';
import UserPage from './components/UserPage';
import Users from './Users';

class MainPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = { currentUser: Users.me.firstName };
    }

    handleLogin = user => {
        console.log('logging in: ', Users.me.lastName);
        // this.setState({ currentUser: user });
    };

    handleLogout = () => {
        console.log('logging out: ', Users.me.pet);
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
