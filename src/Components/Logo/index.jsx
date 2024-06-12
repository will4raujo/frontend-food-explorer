import { Container } from "./styles";
import logo from '../../assets/logo.svg';

export function Logo() {
  return (
    <Container>
      <img src={logo} alt="logo" />
      <span>food explorer</span>
    </Container>
  );
}