import { Container } from "./styles";

export function Select({name, title, value, setValue, options = []}) {

  return (
    <Container>
      <label htmlFor={name}>{title}</label>
      <select id={name} value={value} onChange={(e) => setValue(e.target.value)}>
        {!value && <option value="" disabled>Selecione uma opção</option>}
        {options.map(option => (
          <option key={option.value} value={option.value}>{option.label}</option>
        ))}
      </select>
    </Container>
  )
}