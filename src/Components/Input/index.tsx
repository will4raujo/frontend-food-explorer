import { Container } from './styles'

export function Input({ text, placeholder, required, autocomplete, ...rest}) {
  return (
    <Container>
      <label htmlFor={text}>{text}</label>
      <input id={text} placeholder={placeholder} {...rest} autoComplete={autocomplete} required={required} />
    </Container>
  )
}