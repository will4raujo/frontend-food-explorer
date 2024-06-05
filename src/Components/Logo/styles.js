import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: start;

  img {
    width: 3rem;
    height: 3rem;
    margin-right: 1rem;
  }

  h1 {
    font-size: 2.4rem;
    line-height: 2.8rem;
    font-weight: bold;
    color: ${({ theme }) => theme.COLORS.Light_100};
  }
`;
