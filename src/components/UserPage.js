import React from 'react';
import List from './List';
import Messages from './Messages';
import UserContext from '../UserContext';

const UserPage = () => (
    <div className="userpage">
        <UserContext.Consumer>
            {({ onLogout }) => <button onClick={onLogout}>Logout</button>}
        </UserContext.Consumer>
        <div className="userpage-section">
            <List />
            <Messages />
        </div>
    </div>
);

export default UserPage;
