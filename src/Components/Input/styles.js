import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: .8rem;
  
  font-size: 1.6rem;
  

  > input {
    width: 100%;
    height: 4.8rem;

    padding: 1.6rem 1.4rem;
    
    border-radius: 8px;
    border: none;

    background-color: ${({ theme }) => theme.COLORS.Dark_900};
  }
`;