import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;
  gap: 1.3rem; 
  padding: 1.6rem 0;

  > div img {
    width: 72px;
    height: 72px;
    object-fit: cover;
  }

  > div:nth-child(2) {


    > div {
      display: flex;
      justify-content: start;
      align-items: center;
      gap: 1rem;
      
      h2 {
      font-size: 2rem;
      font-weight: 500;
      line-height: 160%;
      font-family: ${({ theme }) => theme.FONTS.Poppins};
      color: ${({ theme }) => theme.COLORS.Light_300};
      }

      > span {
        font-size: 1.2rem;
        color: ${({ theme }) => theme.COLORS.Light_400};
        cursor: pointer;
      }
    }

    > span {
      font-size: 1.2rem;
      color: ${({ theme }) => theme.COLORS.Tomato_400};
      cursor: pointer;
    }
  }
`