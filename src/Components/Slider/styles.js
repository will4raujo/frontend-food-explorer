import styled from 'styled-components'
import { DEVICE_BREAKPOINTS } from '../../styles/deviceBreakpoints'

export const Container = styled.div`
  margin: 0px 0px 4.8rem 0px;
  padding: 0;
  width: 100%;
  
  position: relative;

  > h2 {
    font-size: 3.2rem;
    font-weight: 400;
    line-height: 140%;
    font-family: ${({ theme }) => theme.FONTS.Poppins};
    color: ${({ theme }) => theme.COLORS.Light_300};
    margin-bottom: 2.4rem;
  }

  > div .splide__arrows {
      > button {

        width: 4rem;
        height: 4rem;
        z-index: 3;

        > svg {
        fill: ${({ theme }) => theme.COLORS.Light_100};
        }
      }

      > button:hover {
        > svg {
          fill: ${({ theme }) => theme.COLORS.Light_300};
        } 
      }
  }

  @media (min-width: ${DEVICE_BREAKPOINTS.MB}) {
    max-width: 112rem;
    margin: 0 auto 4.8rem auto;
  }

  @media (min-width: ${DEVICE_BREAKPOINTS.LG}) {
    
    > div::before {
      content: '';
      display: ${({ $loading }) => $loading ? 'none' : 'block'};
      position: absolute;
      width: 30rem;
      height: 47rem;
      border-radius: 8px;
      background: ${({ theme }) => theme.COLORS.Gradient_100};
      bottom: 0;
      left: 0;

      z-index: 2;
      transition: width 1s ease;

    }

    > div:hover::before {
      width: 5rem;
    }

    > div::after {
      content: '';
      display: ${({ $loading }) => $loading ? 'none' : 'block'};
      position: absolute;
      width: 30rem;
      height: 47rem;
      border-radius: 8px;
      background: ${({ theme }) => theme.COLORS.Gradient_100_reverse};
      bottom: 0;
      right: 0;

      z-index: 2;
      transition: width 1s ease;
    }

    > div:hover::after {
      width: 5rem;
    }
  }

  @media (min-width: ${DEVICE_BREAKPOINTS.XXL}) {

    > h2 {
     font-size: 3.2rem;
    }
  }
`
