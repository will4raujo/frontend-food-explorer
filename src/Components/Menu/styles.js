import styled from 'styled-components'

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000;

  background-color: ${({ theme }) => theme.COLORS.Dark_400};

  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 115px 1fr 7.7rem;
  grid-template-areas:
    'header'
    'Content'
    'footer';
  animation: slideIn .3s ease-in-out;

  @keyframes slideIn {
    from {
      transform: translateX(-100%);
    }
    to {
      transform: translateX(0);
    }
  }
`

export const Header = styled.header`
  grid-area: header;
  padding: 5.6rem 2.4rem 2.8rem 2.4rem;

  > div {
    display: flex;
    gap: 1.6rem;
    align-items: center;

    font-size: 2.2rem;

    cursor: pointer;
  }
  
  background-color: ${({ theme }) => theme.COLORS.Dark_700};
`
export const Content = styled.div`
  grid-area: Content;
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 3.6rem 2.8rem;

`
export const Nav = styled.nav`
  grid-area: nav;
  margin-top: 3.6rem;

  > ul {
    display: flex;
    flex-direction: column;
    gap: 1.6rem;
  }

  > ul li {
    height: 5.4rem;
    padding: 1rem;
    
    font-size: 2.4rem;
    font-weight: 200;
    font-family: ${({ theme }) => theme.FONTS.Poppins};
    color: ${({ theme }) => theme.COLORS.Light_300};
    line-height: 140%;

    list-style: none;
    border-bottom: 1px solid ${({ theme }) => theme.COLORS.Dark_1000};

    cursor: pointer;

    &:hover {
      background-color: ${({ theme }) => theme.COLORS.Dark_1000};
      color: ${({ theme }) => theme.COLORS.Light_100};
      border-radius: 0.8rem;
    }
  }
`