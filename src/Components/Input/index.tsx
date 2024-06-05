import { Container } from './styles'

export function Input({ text, placeholder ,...rest}) {
  return (
    <Container>
      <label htmlFor={text}>{text}</label>
      <input id={text} placeholder={placeholder} {...rest}/>
    </Container>
  )
}