import styled from "styled-components";
import { DEVICE_BREAKPOINTS } from "../../styles/deviceBreakpoints";

export const Container = styled.div`
  display: flex;
  align-items: center;
  gap: .8rem;

  > .logo-name-container {
    display: flex;
    align-items: center;
    justify-content: start;
    gap: 0.8rem;
     
    > img {
      width: 3rem;
      height: 3rem;
     }
    
     > .logo-name {
      font-size: 2.2rem;
      line-height: auto;
     font-weight: bold;
      color: ${({ theme }) => theme.COLORS.Light_100};
    }
  }

  > .admin-tag-container .admin-tag {
    font-size: 1.2rem;
    line-height: 160%;
    font-weight: 400;
    color: ${({ theme }) => theme.COLORS.Cake_200};
  }

  @media screen and (min-width: ${DEVICE_BREAKPOINTS.MB}) {
    width: 20rem;
    flex-direction: column;

    > .admin-tag-container {
      width: 100%;
      position: relative;
      display: flex;
      justify-content: flex-end;
      

      > span {
        position: absolute;
        top: -14px;
        right: 15px;
      }
    }
  }
`;
