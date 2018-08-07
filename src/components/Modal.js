import React, { Component } from 'react';
import styled from 'styled-components';

import Portal from './Portal';

class Modal extends Component {
  render() {
    const { children, toggle, on } = this.props;
    return (
      <Portal>
        {on && (
          <ModalWrapper>
            <ModalCard>
              <CloseButton onClick={toggle}>Close</CloseButton>
              {children}
            </ModalCard>
            <Background onClick={toggle} />
          </ModalWrapper>
        )}
      </Portal>
    );
  }
}

export default Modal;

const ModalWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0.9;

  display: flex;
  justify-content: center;
  align-items: center;
`;

const ModalCard = styled.div`
  position: relative;
  background-color: #fff;
  border-radius: 5px;
  padding: 15px;
  width: 500px;
  max-width: 90vw;
  box-shadow: 2px 3px 15px rgba(0, 0, 0, 0.7);
  z-index: 10;
`;

const CloseButton = styled.button`
  border: none;
  background-color: red;
  color: #fff;
  position: absolute;
  top: 5px;
  right: 5px;
  text-transform: uppercase;
  padding: 3px 5px;
`;

const Background = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background-color: #000;
  opacity: 0.7;
`;
