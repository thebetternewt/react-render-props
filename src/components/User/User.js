import React, { Component } from 'react';
import UserContext from './UserContext';
import { Button } from 'components/Elements';

class User extends Component {
  render() {
    return (
      <UserContext.Consumer>
        {context => (
          <div>
            <h1>User Info</h1>
            <h3>{context.user.name}</h3>
            <h4>{context.user.email}</h4>
            <Button onClick={context.logout} style={{ backgroundColor: 'red' }}>
              Logout
            </Button>
          </div>
        )}
      </UserContext.Consumer>
    );
  }
}

export default User;
