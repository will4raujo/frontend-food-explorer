import styled from 'styled-components';

export const Container = styled.button`
  display: flex;
  align-items: center;

  background: none;
  border: none;
  
  font-size: 1.6rem;
  font-family: ${({ theme }) => theme.FONTS.Poppins};
  color: ${({ theme }) => theme.COLORS.Light_300};
  line-height: 140%;
  

  cursor: pointer;
  text-decoration: none;

  > svg {
    width: 2.2rem;
    height: 2.2rem;
  }

  &:hover {
    color: ${({ theme }) => theme.COLORS.Light_100};
  }
`;