import styled from 'styled-components'
import { DEVICE_BREAKPOINTS } from '../../styles/deviceBreakpoints'

export const Container = styled.div`
  height: 100vh;
  width: 100vw;

  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 11.5rem 1fr 7.7rem;
  grid-template-areas:
    'header'
    'main'
    'footer';

  > main {
    grid-area: main;
    

    margin-top: 1rem;
    padding: 0 3.2rem 5rem 3.2rem;

    display: flex;
    flex-direction: column;
    gap: 2.4rem;

    > h1 {
      font-size: clamp(1.8rem, 3.2vw, 4rem);
      font-weight: 400;
      line-height: 140%;
    }

    > form {
      display: flex;
      flex-direction: column;
      gap: 2.4rem;

      > .col-3,
      .col-2 {
        display: grid;
        gap: 2.4rem;
      }
    }

    > .action-buttons {
      display: flex;
      gap: 3.2rem;
      justify-content: end;
    }
  }

  @media (min-width: ${DEVICE_BREAKPOINTS.LG}) {
    > main {
      width: 112rem;
      margin: 1rem auto 0 auto;
      
      > form {
        .col-2 {
          grid-template-columns: 80% 1fr;
        }
        .col-3 {
          grid-template-columns: 20% 1fr 30%;
          align-items: center;
        }
      }

      > .action-buttons {
        width: 35rem;
        align-self: end;

        > button {
          max-width: 17.5rem;
        }
      }
    }
  }
`

export const FileInput = styled.div`
  display: flex;
  flex-direction: column;

  > h2 {
    margin-bottom: 0.8rem;
    font-size: 1.6rem;
    line-height: 100%;
    font-weight: 400;
    color: ${({ theme }) => theme.COLORS.Light_400};
  }

  > label {
    height: 4.8rem;
    width: 100%;
    padding: 1.2rem;

    display: flex;
    align-items: center;
    gap: 0.8rem;

    border-radius: 5px;
    background-color: ${({ theme }) => theme.COLORS.Dark_900};

    font-size: 1.4rem;
    font-family: ${({ theme }) => theme.FONTS.Poppins};

    cursor: pointer;

    > input {
      display: none;
    }
  }
`

export const SubmitButton = styled.button`
  height: 4.8rem;
  width: 100%;
  padding: 1.2rem 2.4rem;

  border: none;
  border-radius: 5px;
  background-color: ${({ theme }) => theme.COLORS.Tomato_400};

  font-size: 1.4rem;
  font-weight: 500;
  font-family: ${({ theme }) => theme.FONTS.Poppins};
  color: ${({ theme }) => theme.COLORS.Light_100};

  cursor: pointer;
`

export const GhostButton = styled.button`
  height: 4.8rem;
  width: 100%;
  padding: 1.2rem auto;

  border: none;
  border-radius: 5px;
  background-color: ${({ theme }) => theme.COLORS.Dark_800};

  font-size: 1.4rem;
  font-weight: 500;
  font-family: ${({ theme }) => theme.FONTS.Poppins};
  color: ${({ theme }) => theme.COLORS.Light_100};

  cursor: pointer;
`
