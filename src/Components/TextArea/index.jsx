import { Container } from "./styles";

export function TextArea({ text, ...rest }) {
  return (
    <Container>
      <label htmlFor='description'>{text}</label>
      <textarea id='description' {...rest} />
    </Container>
  );
}