import styled from 'styled-components'

export const Container = styled.button`
    width: auto;
    height: 4.8rem;

    padding: 0 1.2rem;

    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.8rem;

    background-color: ${({ theme }) => theme.COLORS.Tomato_100};
    color: ${({ theme }) => theme.COLORS.Light_100};

    font-size: 1.6rem;
    font-weight: medium;
    font-family: ${({ theme }) => theme.FONTS.Poppins};
    
    border-radius: 5px;
    border: 0;
    
    cursor: pointer;
`