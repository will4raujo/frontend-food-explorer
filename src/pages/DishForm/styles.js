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
    overflow-y: auto;
    
    margin-top: 1rem;
    padding: 0 3.2rem 5rem 3.2rem;
    
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
      
      > .col-3, .col-2 {
        display: grid;
        gap: 2.4rem;  
      }
    }

    > .action-buttons {
      display: flex;
      gap: 3.2rem;
    }
  }

  @media (min-width: 768px) {
    
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
export const SubmitButton = styled.button`
  height: 4.8rem;
  width: 100%;
  padding: 1.2rem 2.4rem;

  border: none;
  border-radius: 5px;
  background-color: ${({ theme }) => theme.COLORS.Tomato_400};

  font-size: 1.4rem;
  font-weight: 500;
  font-family: ${({ theme }) => theme.FONTS.Poppins};
  color: ${({ theme }) => theme.COLORS.Light_100};

  cursor: pointer;

`
export const GhostButton = styled.button`
  height: 4.8rem;
  width: 100%;
  padding: 1.2rem auto;

  border: none;
  border-radius: 5px;
  background-color: ${({ theme }) => theme.COLORS.Dark_800};

  font-size: 1.4rem;
  font-weight: 500;
  font-family: ${({ theme }) => theme.FONTS.Poppins};
  color: ${({ theme }) => theme.COLORS.Light_100};

  cursor: pointer;

`