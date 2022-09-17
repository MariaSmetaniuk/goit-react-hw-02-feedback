import styled from 'styled-components';

export const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 80px;
  padding: ${p => p.theme.space[2]}px;
  font-size: ${p => p.theme.fontSizes.m};
  font-weight: 500;
  text-transform: capitalize;
  cursor: pointer;
  color: ${p => p.theme.colors.text};
  background-color: ${p => p.theme.colors.primary};
  border: ${p => p.theme.borders.normal};
  border-radius: ${p => p.theme.radii.sm};
  box-shadow: 0px 5px 6px 1px rgba(60, 60, 60, 0.64);

  :hover,
  :focus {
    background-color: ${p => p.theme.colors.secondary};
    border-color: ${p => p.theme.colors.black};
    color: ${p => p.theme.colors.white};
  }
`;
