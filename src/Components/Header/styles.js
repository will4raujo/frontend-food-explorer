import styled from "styled-components";

export const Container = styled.header`
  width: 100%;
  height: 115px;
  grid-area: header;

  padding: 5.6rem 2.4rem 2.8rem 2.4rem;

  display: flex;
  justify-content: space-between;
  align-items: center;

  background: ${({ theme }) => theme.COLORS.Dark_700};

  > div:nth-child(2) {
    scale: 0.75;
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