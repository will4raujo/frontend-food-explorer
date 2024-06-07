import styled from "styled-components";

export const Container = styled.header`
  width: 100vw;
  height: 115px;
  grid-area: header;

  padding: 5.6rem 2.8rem 2.8rem 2.4rem;

  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 3.2rem;

  background: ${({ theme }) => theme.COLORS.Dark_700};

  .search-container {
    width: 100%;
  }

  .search-container, .desktop-button-container, .logout-icon {
    display: none;
  }

  @media (min-width: 768px) {
    justify-content: center;

    .burger-menu, .search-container, .mobile-button-container{
      display: none;
    }

    .search-container, .desktop-button-container, .logout-icon {
      display: block;
    }
  }

  @media screen and (min-width: 1024px) {
    .search-container {
      width: 58rem;
    }
  }
`;

export const BurgerMenu = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  width: 2.4rem;
  height: 1.8rem;
  cursor: pointer;

  > span {
    width: 100%;
    height: 0.2rem;
    background: ${({ theme }) => theme.COLORS.Light_100};
    
    border-radius: 0.3rem;
  }
`;