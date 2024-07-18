import styled from "styled-components";
import { DEVICE_BREAKPOINTS } from "../../styles/deviceBreakpoints";

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

  .logo-container {
    cursor: pointer;
  }

  .search-container {
    width: 100%;
  }

  .mobile-button-container {
    position: relative;
    
    img {
      cursor: pointer;
    }

    div {
      position: absolute;
      top: -0.8rem;
      right: -0.8rem;

      width: 2rem;
      height: 2rem;
      border-radius: 50%;

      background: ${({ theme }) => theme.COLORS.Tomato_100};
      color: ${({ theme }) => theme.COLORS.Light_100};

      display: flex;
      justify-content: center;
      align-items: center;

      font-size: 1.4rem;
      font-weight: medium;

      cursor: pointer;
    }
  }

  .search-container, .desktop-button-container, .logout-icon {
    display: none;
  }

  @media (min-width: ${DEVICE_BREAKPOINTS.MB}) {
    justify-content: center;

    .burger-menu, .search-container, .mobile-button-container{
      display: none;
    }

    .search-container, .desktop-button-container, .logout-icon {
      display: block;
    }

    .desktop-button-container.last button {
      min-width: 21.5rem;
    }

    > svg {
      min-width: 3.2rem;
      min-height: 3.2rem;
    }
  }

  @media (min-width: ${DEVICE_BREAKPOINTS.XL}) {
    .search-container {
      width: 58rem;
    }
  }
`;

export const BurgerMenu = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  min-width: 2.4rem;
  height: 1.8rem;
  cursor: pointer;

  > span {
    width: 100%;
    height: 0.2rem;
    background: ${({ theme }) => theme.COLORS.Light_100};
    
    border-radius: 0.3rem;
  }

  &:hover > span:nth-child(1) {
    animation: hiddeFromLeft .1s .1s ease-in-out;
  }

  &:hover > span:nth-child(2) {
    transform: rotate(180deg);
    animation: hiddeFromLeft .2s .2s ease-in-out;
  }

  &:hover > span:nth-child(3) {
    animation: hiddeFromLeft .3s .3s ease-in-out;
  }

  @keyframes hiddeFromLeft {
    0% {
      width: 100%;
    }
    50% {
      width: 0;
    }
    100% {
      width: 100%;
    }
  }
`;

export const LogOut = styled.button`

    display: flex;
    justify-content: center;
    align-items: center;

    cursor: pointer;

    border: none;
    background: none;

    > svg { 
        color: ${({ theme }) => theme.COLORS.Light_100};
        font-size: 3.2rem;
    }

    svg:hover {
        color: ${({ theme }) => theme.COLORS.Light_400};
        transition: .5s;
    }
`