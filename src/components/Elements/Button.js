import styled from 'styled-components';
import { purple, elevation } from 'Utilities';

export default styled.button`
  border: none;
  border-radius: 0;
  color: #fff;
  background: ${purple};
  text-transform: uppercase;
  font-size: 1rem;
  padding: 5px 15px;
  ${elevation[1]};
`;
