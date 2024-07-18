import styled from 'styled-components';
import { DEVICE_BREAKPOINTS } from '../../styles/deviceBreakpoints';

export const Container = styled.div`
  max-width: 100vw;
  height: 100vh;
  position: relative;
  overflow-x: hidden;
  
  display: grid;
  grid-template-columns: 100vw;
  grid-template-rows: 115px 1fr 7.7rem;
  grid-template-areas:
    'header'
    'main'
    'footer';

  > main {
    grid-area: main;
    display: flex;
    flex-direction: column;
    gap: 3.2rem;
    width: 100%;
    padding: 5.6rem 3.5rem 5.8rem 3.5rem;

    > h1 {
      font-size: 3.2rem;
      font-weight: 400;
      line-height: 140%;
    }

    > div {
      display: grid;
      gap: 4.8rem;
      grid-template-columns: 1fr;
    }

    p {
      font-size: 2rem;
      font-weight: 500;
      line-height: 160%;
      font-family: ${({ theme }) => theme.FONTS.Poppins};
      color: ${({ theme }) => theme.COLORS.Light_300};
    }
  }

  @media (min-width: ${DEVICE_BREAKPOINTS.MB}) {
    > main {
      > div {
        grid-template-columns: repeat(2, 1fr);
      }
    }
  }

  @media (min-width: ${DEVICE_BREAKPOINTS.LG}) {
    > main {
      padding: 5.6rem 8.8rem 5.8rem 8.8rem;

      > div {
        grid-template-columns: repeat(3, 1fr);
      }
    }
  }

  @media (min-width: ${DEVICE_BREAKPOINTS.XXL}) {
    > main {
      padding: 5.6rem 12.8rem 5.8rem 12.8rem;
      
      > div {
        grid-template-columns: repeat(4, 1fr);
      }
    }
  }
`