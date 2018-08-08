import styled from 'styled-components';
import { elevation, transition, black } from 'Utilities';

export const Card = styled.div`
  background-color: #fff;
  color: ${black};
  border-radius: 0;
  max-width: 320px;
  margin: 0 auto;
  padding: 15px;
  ${elevation[2]};
  ${transition({
    properties: ['box-shadow']
  })};

  &:hover {
    ${elevation[4]};
    transform: translateY(-5px);
  }
`;
