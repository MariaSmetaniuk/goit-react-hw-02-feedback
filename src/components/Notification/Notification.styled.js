import styled from 'styled-components';

export const NotificationStyled = styled.p`
  font-size: 20px;
  font-weight: ${p => p.theme.fontWeights.bold};
  letter-spacing: 0.05rem;
  text-shadow: #4b4b4b 1px 0 10px;
  color: ${p => p.theme.colors.accent};
`;
