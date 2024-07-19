import styled from "styled-components"

export const Container = styled.section`
  min-height: 4.8rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: .8rem;
`

export const H2 = styled.h2`
  font-size: 1.6rem;
  line-height: 100%;
  font-weight: 400;
  color: ${({ theme }) => theme.COLORS.Light_400};
`

export const Content = styled.div`
  min-height: 4.8rem;

  display: flex;
  align-items: center;
  flex-wrap: wrap;

  border-radius: 5px;
  border: none;
  background-color: ${({ theme }) => theme.COLORS.Dark_900};
`