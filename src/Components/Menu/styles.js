import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 115px 150px 1fr 7.7rem;
  grid-template-areas:
    'header'
    'search'
    'nav'
    'footer';
`

export const Header = styled.header`
  grid-area: header;
  
  padding: 5.6rem 2.4rem 2.8rem 2.4rem;

  > div {
    display: flex;
    gap: 1.6rem;
    align-items: center;

    font-size: 2.1rem;
  }
  
  background-color: ${({ theme }) => theme.COLORS.Dark_700};
`

export const Search = styled.div`
  grid-area: search;
  height: 4.8rem;

  margin: 3.6rem 2.8rem;
  padding: 1.6rem 1.4rem;

  
  display: flex;
  align-items: center;
  gap: 1.4rem;

  background-color: ${({ theme }) => theme.COLORS.Dark_900};
  border-radius: 8px;
  border: none;
  font-size: 1.6rem;
  
  > input {
    width: 100%;
    background: transparent;
    
    font-size: 1.6rem;
    color: ${({ theme }) => theme.COLORS.Light_100};
    
    border: none;
    outline: none;
  }
`

export const Nav = styled.nav`
  grid-area: nav;
  margin: 3.6rem 2.8rem;

  > ul {
    display: flex;
    flex-direction: column;
    gap: 1.6rem;
  }

  > ul li {
    font-size: 2.1rem;
    color: ${({ theme }) => theme.COLORS.Light_100};

    padding: 1rem;

    list-style: none;
    border-bottom: 1px solid ${({ theme }) => theme.COLORS.Dark_1000};
  }
`