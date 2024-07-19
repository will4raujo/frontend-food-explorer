import styled from 'styled-components'

export const Container = styled.div`
  grid-area: search;
  height: 4.8rem;
  padding: 1.6rem 1.4rem;
  position: relative;
  
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
export const SearchResults = styled.div`
  position: absolute;
  top: 5.6rem;
  right: 0;
  left: 0;
  z-index: 10;

  background-color: ${({ theme }) => theme.COLORS.Dark_900};
  border-radius: 8px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

  > ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }

  > ul > li {
    padding: 1.6rem 1.4rem;
    font-size: 1.6rem;
    color: ${({ theme }) => theme.COLORS.Light_100};
    cursor: pointer;

    &:hover {
      background-color: ${({ theme }) => theme.COLORS.Dark_800};
    }
  }
`