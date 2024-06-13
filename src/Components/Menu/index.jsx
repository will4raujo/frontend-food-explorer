import { Container, Header, Nav, Content } from './styles'
import { InputSearch } from '../InputSearch'
import { Footer } from '../Footer'
import closeIcon from '../../assets/icons/close.svg'

export function Menu({ isOpen, onClose }) {

  return (
    <Container isOpen={isOpen}>
      <Header>
        <div onClick={onClose}>
          <img src={closeIcon} alt="Close" />
          Menu
        </div>
      </Header>
      <Content>
        <InputSearch />
        <Nav>
          <ul>
            <li>Novo prato</li>
            <li>Sair</li>
          </ul> 
        </Nav>
      </Content>
      <Footer />
    </Container>
  )
}