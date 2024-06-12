import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: .8rem;
  
  font-size: 1.6rem;
  color: ${({ theme }) => theme.COLORS.Light_400};
  

  > textarea {
    width: 100%;
    min-height: 10rem;

    padding: 1.6rem 1.4rem;
    
    border-radius: 8px;
    border: none;

    background-color: ${({ theme }) => theme.COLORS.Dark_900};
    color: ${({ theme }) => theme.COLORS.Light_500};
    font-family: ${({ theme }) => theme.FONTS.Roboto};
    font-size: 1.6rem;

    resize: none;
    
    &:focus {
      outline: none;
      box-shadow: 0 0 0 1px ${({ theme }) => theme.COLORS.Light_400};
    }

    &::placeholder {
        color: ${({ theme }) => theme.COLORS.Light_500};
    }
  }
`