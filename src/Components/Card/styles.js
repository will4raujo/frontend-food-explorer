import styled from 'styled-components';

export const Container = styled.div`

  margin-right: 1.6rem;
  
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 1.2rem;

  position: relative;
  width: 21rem;
  height: 29.2rem;

  padding: 2.4rem;

  border-radius: 8px;
  border: 1px solid ${({ theme }) => theme.COLORS.Dark_300};
  background-color: ${({ theme }) => theme.COLORS.Dark_200};

  > img {
    width: 8.8rem;
    height: 8.8rem;
  }

  > svg {
    position: absolute;
    top: 1.6rem;
    right: 1.6rem;

    width: 2.4rem;
    height: 2.2rem;

    color: ${({ theme }) => theme.COLORS.Light_300};
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

  >.buttons-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    gap: 1.2rem;
  }

  .control-container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 10rem;
    height: 2.4rem;

    > button {
      background: transparent;
      border: none;

      > svg {
        color: ${({ theme }) => theme.COLORS.Light_100};
        font-size: 1.8rem;
      }
    }

    > span {
      font-size: 1.6rem;
    }
  }

  @media (min-width: 768px) {

    height: 46.2rem;
    width: 30.4rem;

    > img {
      width: 17.6rem;
      height: 17.6rem;
    }

    > h3 {
      font-size: 2.4rem;
      line-height: 140%;
    }

    p {
      display: block;
      font-size: 1.4rem;
      font-weight: 400;
      line-height: 160%;
      color: ${({ theme }) => theme.COLORS.Light_400};
    }

    .price {
      font-size: 3.2rem;
    }

    .buttons-container {
      flex-direction: row;
      
      .control-container {
        width: 100%;
        gap: 1.4rem;
        
        > button {

          > svg {
            font-size: 2.4rem;
          }
        }

        > span {
          font-size: 2rem;
        }
      }
    }
  }
 ` 