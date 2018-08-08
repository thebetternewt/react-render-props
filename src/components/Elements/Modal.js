import React, { Component } from 'react';
import styled from 'styled-components';

import { Portal, absolute } from 'Utilities';
import Icon from './Icon';
import { Card } from './Cards';

class Modal extends Component {
  render() {
    const { children, toggle, on } = this.props;
    return (
      <Portal>
        {on && (
          <ModalWrapper>
            <ModalCard>
              <CloseButton onClick={toggle}>
                <Icon name="close" color="#333" />
              </CloseButton>
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
  ${absolute({})};
  width: 100%;
  height: 100%;

  display: flex;
  justify-content: center;
  align-items: center;
`;

const ModalCard = styled(Card)`
  position: relative;
  margin-bottom: 40vh;
  width: 500px;
  max-width: 90vw;
  z-index: 10;
`;

const CloseButton = styled.button`
  ${absolute({ x: 'right' })};
  border: none;
  background-color: transparent;
  text-transform: uppercase;
  padding: 10px 10px;
  cursor: pointer;
`;

const Background = styled.div`
  ${absolute({})};
  width: 100%;
  height: 100%;
  background-color: #000;
  opacity: 0.5;
`;
