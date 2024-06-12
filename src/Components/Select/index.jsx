import { Container } from "./styles";

export function Select() {
  return (
    <Container>
      <label htmlFor='category'>Categoria</label>
      <select  name='category' >
        <option value='breakfast'>Café da manhã</option>
        <option value='lunch'>Almoço</option>
        <option value='dinner'>Jantar</option>
      </select>
    </Container>
  )
}