import styled from 'styled-components';

export const Container = styled.div`
  margin: 0px 0px;
  padding: 0;
  width: 100vw;
  position: relative;
  background-color: gray;

  > h2 {
    font-size: 1.8rem;
    font-weight: 500;
    line-height: 140%;
    font-family: ${({ theme }) => theme.FONTS.Poppins};
    color: ${({ theme }) => theme.COLORS.Light_300};
    margin-bottom: 2.4rem;
  }

  @media (min-width: 768px) {
    margin: 0 auto;
    width: 112rem;

    > h2 {
     font-size: 3.2rem;
    }
  }

`