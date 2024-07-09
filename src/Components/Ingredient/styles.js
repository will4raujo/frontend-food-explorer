import styled from "styled-components";

export const Container = styled.div`
  margin: .8rem;
  height: 3.2rem;
  display: flex;
  align-items: center;

  border: ${({ theme, $isnew }) => $isnew ? `1px dashed ${ theme.COLORS.Light_600 }` : theme.COLORS.Light_100};
  border-radius: 10px;

  background-color: ${ ({ theme, $isnew}) => $isnew ? 'transparent' : theme.COLORS.Light_600};
  
  > div {
    height: 100%;
    padding: .8rem 1.6rem;

    display: flex;
    align-items: center;
    line-height: 100%;

    border: none;
    background: transparent;
    
    font-size: 1.6rem;
    color: ${({ theme }) =>  theme.COLORS.Light_100};
    
    > button {
      height: 3.2rem;
      margin-left: .8rem;

      display: flex;
      align-items: center;

      border: none;
      background: transparent;
      
      color: ${({ theme }) => theme.COLORS.Light_100};
      
      cursor: pointer;

      &:hover {
        color: ${({ theme }) => theme.COLORS.Light_300};
      }
    }
  }

  > input {
    height: 100%;
    width: 12rem;
    padding: .8rem 0 .8rem 1.6rem;

    display: flex;
    align-items: center;
    line-height: 100%;

    border: none;
    background: transparent;

    color: ${({ theme }) => theme.COLORS.Light_500};

    &:focus {
      outline: none;
    }
  }

  > button {
      height: 100%;
      padding: .8rem 1.6rem .8rem 0;

      
      border: none;
      background: transparent;
      
      color: ${({ theme, $isnew }) => $isnew ? theme.COLORS.Light_600 : theme.COLORS.Light_100};

      cursor: pointer;

      &:hover {
        color: ${({ theme }) => theme.COLORS.Light_300};
      }
  	}
`