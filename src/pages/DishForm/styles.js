import styled from "styled-components";

export const Container = styled.div`
  height: 100vh;
  width: 100vw;

  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 11.5rem 1fr 7.7rem;
  grid-template-areas: 
  "header"
  "main"
  "footer";
  
  > main {
    grid-area: main;
    
    margin-top: 1rem;
    padding: 0 3.2rem;
    
    display: flex;
    flex-direction: column;
    gap: 2.4rem;

    > h1 {
      font-size: clamp(1.8rem, 3.2vw , 4rem);
      font-weight: 400;
      line-height: 140%;
    }

    > form { 
      display: flex;
      flex-direction: column;
      gap: 2.4rem;
    }
  }
`

export const FileInput = styled.div`
  
  display: flex;
  flex-direction: column;
  
  > h2 {
    margin-bottom: 1.6rem;
    font-size: 1.6rem;
    line-height: 100%;
    font-weight: 400;
    color: ${({ theme }) => theme.COLORS.Light_400};
  } 

  > label {
    height: 4.8rem;
    width: 100%;
    padding: 1.2rem 2.4rem;

    display: flex;
    align-items: center;
    gap: .8rem;

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