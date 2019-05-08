import React from 'react';
import UserContext from '../UserContext';

const List = () => (
    <UserContext.Consumer>
        {({ currentUser }) => (
            <div className="list">
                <p style={{ textDecoration: 'underline' }}>List</p>
                Your list is empty, {currentUser}!
            </div>
        )}
    </UserContext.Consumer>
);

export default List;
