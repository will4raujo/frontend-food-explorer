import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 1.6rem;

  img {
    width: 4.3rem;
    height: 4.3rem;
  }

  h1 {
    font-size: 3.7rem;
    font-weight: bold;
    color: ${({ theme }) => theme.COLORS.Light_100};
  }
`;
