import styled from 'styled-components';

export const NotificationStyled = styled.p`
  font-size: 20px;
  font-weight: ${p => p.theme.fontWeights.bold};
  letter-spacing: 0.05rem;
  text-shadow: 2px 7px 5px rgba(0, 0, 0, 0.3),
    0px -4px 10px rgba(255, 255, 255, 0.3);
  color: ${p => p.theme.colors.accent};
`;
