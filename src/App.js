import React, { Component, Fragment } from 'react';

import { Toggle } from 'Utilities';
import { Modal, Button } from 'components/Elements';
import { User, UserProvider } from 'components/User';
import Drag from './components/Drag';

import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <UserProvider>
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">Welcome to React</h1>
          </header>

          <Drag />

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
