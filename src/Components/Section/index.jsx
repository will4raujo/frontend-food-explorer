import { Container, H2, Content } from './styles'

export function Section({ title , children }) {
  return (
    <Container>
      <H2>{title}</H2>
      <Content>
        {children}
      </Content>
    </Container>
    
  )
}