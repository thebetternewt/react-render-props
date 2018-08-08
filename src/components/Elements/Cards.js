import styled from 'styled-components';
import { elevation, transition, black } from 'Utilities';

export const Card = styled.div`
  background-color: #fff;
  color: ${black};
  border-radius: 0;
  padding: 15px;
  ${elevation[1]};
  ${transition({})};
  &:hover {
    ${elevation[4]};
    transform: translateY(-5px);
  }
`;
