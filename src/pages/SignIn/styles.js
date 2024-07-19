import styled from 'styled-components'
import { DEVICE_BREAKPOINTS } from '../../styles/deviceBreakpoints'

export const Container = styled.div`
    height: 100vh;
    margin: 0 4.7rem 0 6.5rem;
    
    display: flex;
    flex-direction: column;
    align-items: start;
    justify-content: center;
    gap: 3.2rem;

    > div:first-child {
        margin-bottom: 4.1rem;
        width: auto;
        > .logo-name-container {
            > img {
                width: 4.3rem;
                height: 4.3rem;
            } 
            > .logo-name {
                font-size: 3.7rem;
            }

        }
    }

    @media (min-width: ${DEVICE_BREAKPOINTS.MB}) {
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

    > button:last-child {
        align-self: center;
    }

    @media (min-width: ${DEVICE_BREAKPOINTS.MB}) {
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