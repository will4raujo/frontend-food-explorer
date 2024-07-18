import styled from "styled-components";
import { DEVICE_BREAKPOINTS } from "../../styles/deviceBreakpoints";

export const Container = styled.div`
  width: 10rem;

  .control-container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 10rem;
    height: 2.4rem;

    > button {
      background: transparent;
      border: none;
      cursor: pointer;
      transition: background-color 0.3s;
      > svg {
        color: ${({ theme }) => theme.COLORS.Light_100};
        font-size: 1.8rem;
      }
    }

    > span {
      font-size: 1.6rem;
    }
  }

  @media (min-width: ${DEVICE_BREAKPOINTS.MB}) {
    .control-container {
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
`;
