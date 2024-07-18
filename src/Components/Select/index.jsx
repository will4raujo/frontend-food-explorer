import { Container } from "./styles";

export function Select({name, title, value, setValue, semaphore, options = [], ...rest}) {
  return (
    <Container $semaphore={semaphore} >
      <label htmlFor={name}>{title}</label>
      <select id={name} value={value} onChange={(e) => setValue(e.target.value)} {...rest}>
        {!value && <option value="" disabled>Selecione uma opção</option>}
        {options.map(option => (
          <option key={option.value} value={option.value}>{option.label}</option>
        ))}
      </select>
    </Container>
  )
}