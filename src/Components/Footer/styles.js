import styled from "styled-components";

export const Container = styled.div`
  grid-area: footer;

  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2.4rem;

  font-family: ${({ theme }) => theme.FONTS.Poppins};
  font-size: 1.2rem;
  font-weight: 400;
  color: ${({ theme }) => theme.COLORS.Light_400};

  background-color: ${({ theme }) => theme.COLORS.Dark_600};

  > div:nth-child(1) {
    filter: grayscale(100%);

    img {
      width: 1.8rem;
      height: 1.8rem;
    }

    > h1 {
      font-size: 1.2rem;
      font-weight: 400;
    }
  }

  @media (min-width: 768px) {
    justify-content: space-around;
    padding: 0 2.4rem;
  }
`;
