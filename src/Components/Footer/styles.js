import styled from 'styled-components'
import { DEVICE_BREAKPOINTS } from '../../styles/deviceBreakpoints'

export const Container = styled.div`
  grid-area: footer;
  width: 100vw;

  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2.4rem;

  font-family: ${({ theme }) => theme.FONTS.Poppins};
  font-size: 1.2rem;
  font-weight: 400;
  color: ${({ theme }) => theme.COLORS.Light_400};

  background-color: ${({ theme }) => theme.COLORS.Dark_600};

  > div .logo-name-container {
    filter: grayscale(100%);
    
    > img {
      width: 1.8rem;
      height: 1.8rem;
    }
      
    > .logo-name {
      font-size: 1.2rem;
      font-weight: 400;
    }
  }

  @media (min-width: ${DEVICE_BREAKPOINTS.MB}) {
    justify-content: space-around;
    padding: 0 2.4rem;
  }
`
