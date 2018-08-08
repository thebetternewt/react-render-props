import React, { Component } from 'react';
import styled from 'styled-components';
import { Transition, animated, interpolate } from 'react-spring';

import { Portal, absolute } from 'Utilities';
import Icon from './Icon';
import { Card } from './Cards';

class Modal extends Component {
  render() {
    const { children, toggle, on } = this.props;
    return (
      <Portal>
        <Transition
          native
          config={{
            tension: 180,
            friction: 40
          }}
          from={{
            opacity: 0,
            bgOpacity: 0,
            cardX: '-50vw',
            cardRotate: '-180deg'
          }}
          enter={{ opacity: 1, bgOpacity: 0.5, cardX: '0', cardRotate: '0deg' }}
          leave={{
            opacity: 0,
            bgOpacity: 0,
            cardX: '50vw',
            cardRotate: '180deg'
          }}
        >
          {on &&
            (styles => (
              <ModalWrapper>
                <ModalCard
                  style={{
                    ...styles,
                    transform: interpolate(
                      [styles.cardX, styles.cardRotate],
                      (x, r) => `translate3d(${x}, 0, 0) rotate(${r})`
                    )
                  }}
                >
                  <CloseButton onClick={toggle}>
                    <Icon name="close" color="#333" />
                  </CloseButton>
                  {children}
                </ModalCard>
                <Background
                  style={{ opacity: styles.bgOpacity.interpolate(op => op) }}
                  onClick={toggle}
                />
              </ModalWrapper>
            ))}
        </Transition>
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

const AnimCard = Card.withComponent(animated.div);

const ModalCard = styled(AnimCard)`
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

const Background = styled(animated.div)`
  ${absolute({})};
  width: 100%;
  height: 100%;
  background-color: #000;
  opacity: 0.5;
`;
