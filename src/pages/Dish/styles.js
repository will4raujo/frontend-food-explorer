import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  overflow-x: hidden;

  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 11.5rem 1fr 7.7rem;
  grid-template-areas:
    "header"
    "content"
    "footer";

  > main {
    grid-area: content;
    margin: 3.6rem 0;
    padding: 0;

    width: 100%;

    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1.6rem;

    .col-1 {
      > a {
        display: flex;
        align-items: center;
        gap: 0.8rem;
        align-self: start;

        font-size: 2.4rem;
        font-family: ${({ theme }) => theme.FONTS.Poppins};
        font-weight: 500;
        line-height: 140%;

        margin-bottom: 1.6rem;
      }

      > img {
        width: 26.4rem;
        height: 26.4rem;
      }
    }
    .col-2 {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 2.4rem;

      > h1 {
        font-family: ${({ theme }) => theme.FONTS.Poppins};
        font-size: 2.7rem;
        font-weight: 500;
        line-height: 140%;
      }

      > p {
        font-size: 1.6rem;
        line-height: 140%;
        color: ${({ theme }) => theme.COLORS.Light_300};
        font-family: ${({ theme }) => theme.FONTS.Poppins};
      }

      .ingredients {
        width: 32rem;
        padding: 2.85rem;

        display: flex;
        align-items: start;
        gap: 2.4rem;
        flex-wrap: wrap;

        > span {
          height: 3.2rem;
          padding: 0.4rem 0.8rem;
          text-align: center;

          border-radius: 5px;
          background-color: ${({ theme }) => theme.COLORS.Dark_1000};

          font-family: ${({ theme }) => theme.FONTS.Poppins};
          font-size: 1.4rem;
          font-weight: 500;
        }
      }

      > .buttons-container {
        margin-top: 2.4rem;
        width: auto;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 1rem;
      }
    }
  }

  @media (min-width: 1024px) {
    > main {
      flex-direction: row;
      justify-content: center;
      align-items: center;
      gap: 4.7rem;
      
      .col-1 {
        > img {
          width: 39rem;
          height: 39rem;
        }
      }
      .col-2 {
        width: 70rem;
        align-items: start;

        .tags {
          width: auto;
          padding: 0;
        }
      }
    }
  }
`;
