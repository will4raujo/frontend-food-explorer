import { Container, Header, Nav } from './styles'
import { InputSearch } from '../InputSearch'
import { Footer } from '../Footer'
import closeIcon from '../../assets/icons/close.svg'


export function Menu() {
  return (
    <Container>
      <Header>
        <div>
          <img src={closeIcon} alt="Close" />
          Menu
        </div>
      </Header>
      <InputSearch />
      <Nav>
        <ul>
          <li>Novo prato</li>
          <li>Sair</li>
        </ul> 
      </Nav>
      <Footer />
    </Container>
  )
}