import React, { Component, Fragment, createContext } from 'react';
import logo from './logo.svg';
import './App.css';

import { Toggle } from 'Utilities';
import { Modal, Button } from 'components/Elements';
import { User, UserProvider } from 'components/User';

class App extends Component {
  render() {
    return (
      <UserProvider>
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">Welcome to React</h1>
          </header>

          <User />

          <Toggle>
            {({ on, toggle }) => (
              <Fragment>
                <Button onClick={toggle}>Login</Button>
                <Modal on={on} toggle={toggle}>
                  <h1>Still in modal</h1>
                </Modal>
              </Fragment>
            )}
          </Toggle>
        </div>
      </UserProvider>
    );
  }
}

export default App;
