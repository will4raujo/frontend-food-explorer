import styled from "styled-components";
import arrowIcon from "../../assets/icons/arrow.svg";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: .8rem;

  label {
    font-size: 1.6rem;
    font-weight: 400;

    color: ${({ theme }) => theme.COLORS.Light_400 };
  }

  select {
    height: 4.8rem;
    border-radius: 5px;
    border: none;

    padding: 1.3rem 1.6rem;
    font-size: 1.6rem;

    background-color: ${({ theme }) => theme.COLORS.Dark_900};
    color: ${({ theme }) => theme.COLORS.Light_400};

    appearance: none;
    -webkit-appearance: none;

    background-image: url(${arrowIcon});
    background-repeat: no-repeat;
    background-position: right 1.6rem top 50%;

    > option {
      color: ${({ theme }) => theme.COLORS.Light_400};
    }

    &:focus {
      outline: none;
      box-shadow: 0 0 0 1px ${({ theme }) => theme.COLORS.Light_400};
    }
    
  }
`