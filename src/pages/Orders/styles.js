import styled from 'styled-components';

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
    display: flex;
    gap: 7.5rem;
    width: 100%;
    padding: 5.6rem 3.5rem 5.8rem 3.5rem;
  }
`
export const OrdersContainer = styled.div`  
  display: flex;
  flex-direction: column;
  gap: 2.4rem;
  
  min-width: 30rem;
  position: relative;

  > h1 {
    font-size: 3.2rem;
    font-weight: 400;
    line-height: 140%;
  }

  p {
    font-size: 2rem;
    font-weight: 500;
    line-height: 160%;
    font-family: ${({ theme }) => theme.FONTS.Poppins};
    color: ${({ theme }) => theme.COLORS.Light_300};
  }
  
  button {
    width: 21.6rem;
    align-self: flex-end;
  }
  

  @media (max-width: 1024px) {

    width: 44.4rem;
    
  }
`
export const Item = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;
  gap: 1.3rem; 
  padding: 1.6rem 0;

  > div img {
    width: 72px;
    height: 72px;
    object-fit: cover;
  }

  > div:nth-child(2) {
    h2 {
      font-size: 2rem;
      font-weight: 500;
      line-height: 160%;
      font-family: ${({ theme }) => theme.FONTS.Poppins};
      color: ${({ theme }) => theme.COLORS.Light_300};
    }
    span {
      font-size: 1.2rem;
      color: ${({ theme }) => theme.COLORS.Tomato_400};
      cursor: pointer;
    }
  }
`

export const Payment = styled.div`
    display: flex;
    flex-direction: column;
    gap: 2.4rem;

    width: 100%;

    background-color: ${({ theme }) => theme.COLORS.Dark_400};

    h1 {
      font-size: 3.2rem;
      font-weight: 400;
      line-height: 140%;
    }

    .payment-container {
      display: grid;
      grid-template-columns: 1fr 1fr;
      border-top-left-radius: 8px;
      border-top-right-radius: 8px;

      max-width: 53rem;
      
      > button {
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 1.4rem;
        padding: 1.6rem 0;
        
        border: 1px solid ${({ theme }) => theme.COLORS.Light_600};
        border-bottom: none;
         
        color: ${({ theme }) => theme.COLORS.Light_300};
        font-size: 1.6rem;
      }

      > button:nth-child(1) {
        border-top-left-radius: 8px;
        border-right: none;
        background: ${({ theme, $paymentmethod }) => $paymentmethod === 'pix' ? theme.COLORS.Dark_500 : 'transparent'};
      }
      
      > button:nth-child(2) {
        border-top-right-radius: 8px;
        background: ${({ theme, $paymentmethod }) => $paymentmethod === 'credit_card' ? theme.COLORS.Dark_500 : 'transparent'};
      }


      > div {
        grid-column: span 2;
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 3.2rem 0;
        border: 1px solid ${({ theme }) => theme.COLORS.Light_600};

        form {
          display: flex;
          flex-direction: column;
          gap: 3.7rem;
          width: 100%;
          margin: 0 2.5rem;
          
          > .row-2 {
            display: flex;
            justify-content: center;
            align-items: center;
            gap: 1.6rem;
          }
        }

        .waiting-payment, .confirmed-payment, .delivered-order {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          gap: 2.4rem;
          padding: 3.2rem 0;

          color: ${({ theme }) => theme.COLORS.Light_400};
          font-size: 2rem;
          
        }
      }
    }
`