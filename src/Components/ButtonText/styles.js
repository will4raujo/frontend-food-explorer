import styled from 'styled-components';

export const Container = styled.button`
  background: none;
  color: ${({ theme }) => theme.COLORS.Light_100};

  border: none;
  font-size: 1.6rem;

  cursor: pointer;
`;