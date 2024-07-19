import { Container } from "./styles";
import { Loading } from "../Loading";

export function Button({ children, title, loading = false, ...rest }) {
  return (
    <Container disabled={loading} {...rest}>
      {children}
      {loading ? <Loading height={32} width={32}/> : title}
    </Container>
  );
}