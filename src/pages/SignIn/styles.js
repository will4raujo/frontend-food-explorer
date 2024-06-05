import styled from 'styled-components';

export const Container = styled.div`
    height: 100vh;
    margin: 0 4.7rem 0 6.5rem;
    
    display: flex;
    flex-direction: column;
    align-items: start;
    justify-content: center;
    gap: 7.4rem;

    @media (min-width: 768px) {
        flex-direction: row;
        justify-content: space-around;
        align-items: center;
        margin: 0;
    }
`

export const Form = styled.form`
    width: 100%;
    display: flex; 
    flex-direction: column;
    gap: 3.2rem;

    .form-title {
        display: none;
    }

    @media (min-width: 768px) {
        .form-title {
            display: block;
            
            font-size: 3.2rem;
            font-weight: 400;
            text-align: center;
            color: ${({ theme }) => theme.COLORS.Light_100};
            font-family: ${({ theme }) => theme.FONTS.Poppins};
        }

        width: 47.5rem;
        border-radius: 8px;
        background-color: ${({ theme }) => theme.COLORS.Dark_700};
        padding: 6.4rem;
    }
`