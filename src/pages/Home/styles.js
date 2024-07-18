import styled from 'styled-components';
import { DEVICE_BREAKPOINTS } from '../../styles/deviceBreakpoints';

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 115px 150px 1fr 7.7rem;
  grid-template-areas:
    'header'
    'banner'
    'content'
    'footer';
`

export const Banner = styled.div`
  grid-area: banner;
  
  width: calc( 100vw - 5.4rem ); 
  height: 12rem;

  margin-top: 4.4rem;
  margin-bottom: 6.2rem;
  margin-left: 3rem;

  border-radius: 3px;
  
  background: ${({ theme }) => theme.COLORS.Gradient_200};
  
  display: flex;
  justify-content: left;
  align-items: center;

  position: relative;

  > img {
    position: absolute;
    left: -30px;
    bottom: 0;
  }

  > .text-container {
    margin-left: 15rem;
    color: ${({ theme }) => theme.COLORS.Light_300};
    font-family: ${({ theme }) => theme.FONTS.Poppins};
    
    > h1 {
      font-size: clamp(1.8rem, 3.2vw , 4rem);
      font-weight: 500;
      line-height: 140%;
      margin-bottom: .3rem;
        
      }
      
      > p {
        font-size: clamp(1.2rem, 1.6vw , 1.6rem);
        font-weight: 400;
        line-height: 140%;
      }
  }

  @media (min-width: ${DEVICE_BREAKPOINTS.MB}) {
    max-width: 112rem;
    margin: 13rem auto 0 auto;
    height: 17rem;

    justify-content: end;
    
    > img {
      scale: 0.75;
      width: 65.6rem;
      height: 41.2rem;
      bottom: -100px;
      left: -165px;
    }

    > .text-container::after {
      content: '';
      position: absolute;
      
      width: 250px;
      height: 2px;
      background-color: ${({ theme }) => theme.COLORS.Dark_400};
      top: -92px;
      left: 0;
    }

    > .text-container::before {
      content: '';
      position: absolute;
      
      width: 380px;
      height: 70px;
      background-color: ${({ theme }) => theme.COLORS.Dark_400};
      bottom: -70px;
      left: 2px;
    }
    
    > .text-container {
      margin: 0 10rem 0 37rem ;
    }
  }

  @media (min-width: ${DEVICE_BREAKPOINTS.XXL}) {
    width: 112rem;
    margin: 13rem auto 0 auto;
    height: 23rem;
    
    > img {
      scale: 1;
      width: 65.6rem;
      height: 41.2rem;
      bottom: -65px;
      left: -110px;
    }

    > .text-container::after {
      display: none;
    }

    > .text-container {
      margin-left: 0;
    }
  }
    
`

export const Content = styled.div`
  grid-area: content;
  width: 100vw;
  margin: 9.5rem 0 0 0;

  padding-left: 2.4rem;
  display: flex;
  flex-direction: column;

  background-color: ${({ theme }) => theme.COLORS.Dark_400};

  .cards-container {

  }

  @media (min-width: ${DEVICE_BREAKPOINTS.MB}) {
    margin: 27rem auto 0 auto;
  }
` 