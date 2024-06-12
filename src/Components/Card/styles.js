import styled from 'styled-components';

export const Container = styled.div`

  margin-right: 1.6rem;
  position: relative;

  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 1.2rem;

  width: 21rem;
  height: 29.2rem;

  padding: 2.4rem;

  border-radius: 8px;
  border: 1px solid ${({ theme }) => theme.COLORS.Dark_300};
  
  background-color: ${({ theme }) => theme.COLORS.Dark_200};

  cursor: pointer;

  > .fav-button {
    position: absolute;
    top: 1.6rem;
    right: 1.6rem;

    border: none;
    background: transparent;

    cursor: pointer;
    z-index: 2;

    > svg {
      color: ${({ theme }) => theme.COLORS.Light_300};
      width: 2.4rem;
      height: 2.2rem;
       
      > path {
        fill: ${({ theme, favorite }) => favorite === 'true' ? theme.COLORS.Light_300 : theme.COLORS.Dark_300};
      }
    }
  }

  > .content-wrapper {
    display: flex;
    align-items: center;
    flex-direction: column;
    gap: 1.2rem;

    > img {
    width: 8.8rem;
    height: 8.8rem;
    }
  
    > h3 {
      font-size: 1.4rem;
      font-weight: 500;
      font-family: ${({ theme }) => theme.FONTS.Poppins};
      color: ${({ theme }) => theme.COLORS.Light_300};

      line-height: 24px;
    }

    p {    
      display: none;
    }
    .price {
      
      font-size: 1.6rem;
      line-height: 100%;
      color: ${({ theme }) => theme.COLORS.Cake_200};
    } 
  
    > span {
      font-size: 1.6rem;
      line-height: 100%;
      color: ${({ theme }) => theme.COLORS.Light_300};
    }
  }

  > .action-buttons {
    display: flex;
    flex-direction: column;
    align-items: center; 
    justify-content: center;
    gap: 1.6rem;
    width: 100%;

    > button:nth-child(2) {
      width: 100%;
      height: 3.2rem;
    }
  }

  @media (min-width: 768px) {

    height: 46.2rem;
    width: 30.4rem;

    > .content-wrapper {
      > img {
        width: 17.6rem;
        height: 17.6rem;
      }

      > h3 {
        font-size: 2.4rem;
        line-height: 140%;
      }

      > p {
        display: block;
        font-size: 1.4rem;
        font-weight: 400;
        line-height: 160%;
        color: ${({ theme }) => theme.COLORS.Light_400};
      }

      > .price {
        font-size: 3.2rem;
      }
    }

    > .action-buttons {
      flex-direction: row;

      > button:nth-child(2) {
        width: auto;
        height: 4.8rem;
        padding: 1.2rem 2.4rem;
      }
    }
  }
 ` 