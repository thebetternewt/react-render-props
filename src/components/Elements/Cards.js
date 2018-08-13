import styled from 'styled-components';
import { elevation, transition, black } from 'Utilities';

export const Card = styled.div`
  background-color: #fff;
  color: ${black};
  border-radius: 0;
  width: 320px;
  max-width: 90vw;
  margin: 0 auto;
  padding: 15px;
  ${elevation[5]};
  ${transition({
    properties: ['box-shadow']
  })};

  &:hover {
    ${elevation[5]};
    transform: translateY(-5px);
  }
`;
