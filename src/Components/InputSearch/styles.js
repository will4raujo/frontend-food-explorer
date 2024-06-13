import styled from 'styled-components';

export const Container = styled.div`
  grid-area: search;
  height: 4.8rem;
  padding: 1.6rem 1.4rem;

  
  display: flex;
  align-items: center;
  gap: 1.4rem;

  background-color: ${({ theme }) => theme.COLORS.Dark_900};
  border-radius: 8px;
  border: none;
  font-size: 1.6rem;

  > svg {
    color: ${({ theme }) => theme.COLORS.Light_400};
  }
  
  > input {
    width: 100%;
    background: transparent;
    
    font-size: 1.6rem;
    color: ${({ theme }) => theme.COLORS.Light_100};
    
    border: none;
    outline: none;

    &::placeholder {
      color: ${({ theme }) => theme.COLORS.Light_500};
    }
  }
`