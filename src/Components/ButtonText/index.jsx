import { Container } from './styles'

export function ButtonText({ icon : Icon, children, ...rest }) {
  return (
    <Container {...rest}>
      {Icon && <Icon />}
      {children}
    </Container>
  )
}