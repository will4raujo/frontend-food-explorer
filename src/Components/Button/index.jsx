import { Container } from "./styles";

export function Button({ children, title, loading = false, ...rest }) {
  return (
    <Container disabled={loading} {...rest}>
      {children}
      {loading ? "Carregando..." : title}
    </Container>
  );
}