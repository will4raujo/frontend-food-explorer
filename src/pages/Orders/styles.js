import styled from 'styled-components';

export const Container = styled.div`
  max-width: 100vw;
  height: 100vh;
  position: relative;
  overflow-x: hidden;
  
  display: grid;
  grid-template-columns: 100vw;
  grid-template-rows: 115px 1fr 7.7rem;
  grid-template-areas:
    'header'
    'main'
    'footer';

  > main {
    grid-area: main;
    width: 100%;
    padding: 5.6rem 3.5rem 5.8rem 3.5rem;

    h1 {
      margin-bottom: 3.5rem;
      font-size: 3.2rem;
      color: ${({ theme }) => theme.COLORS.Light_400};
      font-family: ${({ theme }) => theme.FONTS.Poppins};
      font-weight: 400;
      line-height: 140%;
    }

  }
`

export const Table = styled.table`
  width: 100%;
  border-spacing: 0; 

  thead {
    font-size: 1.4rem;
    color: ${({ theme }) => theme.COLORS.Light_400};
    
    th {
      height: 6.4rem;          
      border-top: 1px solid ${({ theme }) => theme.COLORS.Dark_1000};
      border-right: 1px solid ${({ theme }) => theme.COLORS.Dark_1000};
      text-align: start;
      padding: 2.4rem;          
    }
    
    th:first-child {
      border-top-left-radius: 0.8rem;
      border-left: 1px solid ${({ theme }) => theme.COLORS.Dark_1000};
    }

    th:last-child {
      border-top-right-radius: 0.8rem;
    }

  }

  tbody {
  }
`

export const Tr = styled.tr`
  height: 8rem;
  
  td {
    border: 1px solid ${({ theme }) => theme.COLORS.Dark_1000};
    border-bottom: none;
    border-left: none;
    padding: 2.1rem 2.4rem;
    font-size: 1.4rem;
    color: ${({ theme }) => theme.COLORS.Light_400};
  }

  td:first-child {
    border-left: 1px solid ${({ theme }) => theme.COLORS.Dark_1000};
  }

  .table-status {
    position: relative;
    margin-left: 1.6rem;
  
    &::before {
      content: '';
      position: absolute;
      top: 4px;
      left: -16px;
      width: 8px;
      height: 8px;
      border-radius: 50%;
      background-color: ${({ theme, $semaphore }) => {
    if ($semaphore === 'pending') return theme.COLORS.Tomato_300;
    if ($semaphore === 'preparing') return theme.COLORS.Carrot_100;
    if ($semaphore === 'finished') return theme.COLORS.Mint_100;
  }};
      z-index: 10;
    }
  }

  td:first-child {
    width: 22.3rem;
  }

  &:last-child td {
    border-bottom: 1px solid ${({ theme }) => theme.COLORS.Dark_1000};
  }

  &:last-child td:first-child {
    border-bottom-left-radius: 0.8rem;
  }

  &:last-child td:last-child {
    border-bottom-right-radius: 0.8rem;
  }
`

export const Card = styled.div`
  min-width: 35.8rem;
  margin-bottom: 2.4rem;
  padding: 2.4rem;
  
  border: 1px solid ${({ theme }) => theme.COLORS.Dark_900};
  border-radius: 0.8rem;
  color: ${({ theme }) => theme.COLORS.Light_400};
  font-size: 1.4rem;

  display: flex;
  flex-direction: column;
  gap: 1.6rem;

  p {
    text-align: start;
  }

  > div .mobile-row-one {
    display: flex;
    justify-content: start;
    gap: 3.1rem;

    div:nth-child(2) {
      position: relative;
      margin-left: 1.6rem;
      &::before {
        content: '';
        position: absolute;
        top: 4px;
        left: -16px;
        width: 8px;
        height: 8px;
        border-radius: 50%;
        background-color: ${({ theme, $semaphore }) => {
    if ($semaphore === 'pending') return theme.COLORS.Tomato_300;
    if ($semaphore === 'preparing') return theme.COLORS.Carrot_100;
    if ($semaphore === 'finished') return theme.COLORS.Mint_100;
  }};
        z-index: 10;
      }
    }
  }
`