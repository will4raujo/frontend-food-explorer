import styled from "styled-components";
import arrowIcon from "../../assets/icons/arrow.svg";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: .8rem;
  position: relative;

  label {
    font-size: 1.6rem;
    font-weight: 400;

    color: ${({ theme }) => theme.COLORS.Light_400 };
  }

  select {
    height: 4.8rem;
    border-radius: 5px;
    border: none;

    padding-top: 1.3rem;
    padding-bottom: 1.3rem;
    padding-left: ${props => props.$semaphore ? '3.2rem' : '1.6rem'};
    font-size: 1.6rem;

    background-color: ${({ theme }) => theme.COLORS.Dark_900};
    color: ${({ theme }) => theme.COLORS.Light_500};

    appearance: none;
    -webkit-appearance: none;

    background-image: url(${arrowIcon});
    background-repeat: no-repeat;
    background-position: right 1.6rem top 50%;

    > option {
      color: ${({ theme }) => theme.COLORS.Light_500};
    }

    &:focus {
      outline: none;
      box-shadow: 0 0 0 1px ${({ theme }) => theme.COLORS.Light_500};
    }

  }

  &::before {
    content: '';
    position: absolute;
    top: 50%;
    left: 1.6rem;
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background-color: ${({ theme, $semaphore }) => {
      if ($semaphore === 'pending') return theme.COLORS.Tomato_300;
      if ($semaphore === 'confirmed') return theme.COLORS.Carrot_100;
      if ($semaphore === 'delivered') return theme.COLORS.Mint_100;
    }};
    z-index: 10;
  }
  
`