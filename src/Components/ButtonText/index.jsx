import { Container } from "./styles";

export function ButtonText({ icon : Icon, children, ...rest }) {
  return (
    <Container type="button" {...rest}>
      {Icon && <Icon />}
      {children}
    </Container>
  );
}