import { Container } from "./styles";
import logo from '../../assets/logo.svg';

export function Logo() {
  return (
    <Container>
      <img src={logo} alt="logo" />
      <h1>food explorer</h1>
    </Container>
  );
}