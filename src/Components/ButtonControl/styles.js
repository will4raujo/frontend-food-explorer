import styled from "styled-components";

export const Container = styled.div`

> .buttons-container {
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
`;