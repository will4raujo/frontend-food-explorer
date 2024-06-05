import { Container, Header, Nav, Search } from './styles'
import { Footer } from '../Footer'
import closeIcon from '../../assets/icons/close.svg'

import { FiSearch } from 'react-icons/fi'

export function Menu() {
  return (
    <Container>
      <Header>
        <div>
          <img src={closeIcon} alt="Close" />
          Menu
        </div>
      </Header>
      <Search>
        <FiSearch />
        <input type="text" placeholder="Pesquisar pratos" />
      </Search>
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