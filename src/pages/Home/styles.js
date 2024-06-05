import styled from 'styled-components';

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
  
  width: calc( 100% - 5.4rem ); 
  height: 12rem;

  margin-top: 4.4rem;
  margin-bottom: 6.2rem;
  margin-left: 3rem;

  border-radius: 3px;
  
  background-color: ${({ theme }) => theme.COLORS.Dark_1000};
  
  display: flex;
  justify-content: center;
  align-items: center;

  position: relative;

  > img {
    position: absolute;
    bottom: 0;
    left: -30px;
  }

  > .text-container {
      font-family: ${({ theme }) => theme.FONTS.Poppins};
      margin-left: 15rem;
      > h1 {
        font-size: 1.8rem;
        font-weight: 500;
     }

      > p {
          font-size: 1.2rem;
          font-weight: 400;
      }
  }
    
`

export const Content = styled.div`
  grid-area: content;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 4.8rem;

  background-color: ${({ theme }) => theme.COLORS.Dark_100};

  .cards-container {

  }
`
export const Footer = styled.div`
  grid-area: footer;

  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2.4rem;
  
  font-family: ${({ theme }) => theme.FONTS.Poppins};
  font-size: 1.2rem;
  font-weight: 400;
  color: ${({ theme }) => theme.COLORS.Light_400};

  background-color: ${({ theme }) => theme.COLORS.Dark_600};

  > div:nth-child(1) {
    gap: .6rem;

    filter: grayscale(100%);
    
    img {
      width: 1.8rem;
      height: 1.8rem;
    }

    > h1 {
      font-size: 1.2rem;
      font-weight: 400;
    }

  }
`
